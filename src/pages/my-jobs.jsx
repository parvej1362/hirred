import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import { getMyJobs } from "@/api/apijobs";
import { getApplications } from "@/api/apiApplication";
import JobCard from "@/components/job-card";
import ApplicationCard from "@/components/application-card";

const MyJobs = () => {
  const { user, isLoaded } = useUser();

  const {
    loading: loadingJobs,
    data: jobs,
    fn: fnJobs,
  } = useFetch(getMyJobs, { recruiter_id: user?.id });

  const {
    loading: loadingApplications,
    data: applications,
    fn: fnApplications,
  } = useFetch(getApplications, { user_id: user?.id });

  useEffect(() => {
    if (isLoaded && user) {
      if (user.unsafeMetadata?.role === "recruiter") {
        fnJobs();
      } else {
        fnApplications();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user]);

  if (!isLoaded || loadingJobs || loadingApplications) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  const isRecruiter = user?.unsafeMetadata?.role === "recruiter";

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        {isRecruiter ? "My Jobs" : "My Applications"}
      </h1>

      {isRecruiter ? (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs && jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isMyJob
                onJobAction={fnJobs}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              You haven't posted any jobs yet.
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {applications && applications.length > 0 ? (
            applications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                isCandidate
              />
            ))
          ) : (
            <div className="text-center text-gray-500 text-lg">
              You haven't applied to any jobs yet.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyJobs;