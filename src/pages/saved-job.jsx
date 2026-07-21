import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import { getSavedJobs } from "@/api/apijobs";
import JobCard from "@/components/job-card";

const SavedJobs = () => {
  const { isLoaded } = useUser();

  const {
    loading: loadingSavedJobs,
    data: savedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) {
      fnSavedJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJobs) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        Saved Jobs
      </h1>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedJobs && savedJobs.length > 0 ? (
          savedJobs.map((savedJob) => {
            // Note: savedJob.job contains the job details
            if (!savedJob.job) return null;
            return (
              <JobCard
                key={savedJob.id}
                job={savedJob.job}
                savedInit={true}
                onJobAction={fnSavedJobs}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No saved jobs found.
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;