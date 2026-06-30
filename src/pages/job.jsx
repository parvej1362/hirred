import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import {
  Briefcase,
  DoorOpen,
  DoorClosed,
  MapPinIcon,
} from "lucide-react";

import dummyJobs from "../data/dummy-jobs";
import { ApplyJobDrawer } from "@/components/apply-job";
import ApplicationCard from "@/components/application-card";
import MDEditor from "@uiw/react-md-editor";

const JobPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const [job, setJob] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const selectedJob = dummyJobs.find((j) => j.id.toString() === id);
      if (selectedJob) {
        setJob(selectedJob);
      } else {
        setNotFound(true);
      }
    }
  }, [isLoaded, id]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  if (notFound) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-red-400">404 - Job Not Found</h1>
        <p className="text-gray-300 mt-2">The job you're looking for does not exist.</p>
      </div>
    );
  }

  if (!job) return null; // Fallback in case job is still loading

  const isRecruiter = user?.id === job.recruiter_id;

  return (
    <div className="flex flex-col gap-8 mt-5">
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <h1 className="gradient-title font-extrabold pb-3 text-4xl sm:text-6xl">
          {job?.title}
        </h1>
        {job?.company?.logo_url && (
          <img src={job.company.logo_url} className="h-12" alt="logo" />
        )}
      </div>

      <div className="flex justify-between text-gray-300">
        <div className="flex gap-2 items-center">
          <MapPinIcon /> {job?.location}
        </div>
        <div className="flex gap-2 items-center">
          <Briefcase /> {job?.applications?.length || 0} Applicants
        </div>
        <div className="flex gap-2 items-center">
          {job?.isOpen ? (
            <>
              <DoorOpen /> Open
            </>
          ) : (
            <>
              <DoorClosed /> Closed
            </>
          )}
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold">About the job</h2>
      <p className="sm:text-lg">{job?.description}</p>

      <h2 className="text-2xl sm:text-3xl font-bold">What we are looking for</h2>
      <MDEditor.Markdown
  source={
    Array.isArray(job?.requirements)
      ? job.requirements.map((req) => `- ${req}`).join("\n")
      : typeof job?.requirements === "string"
      ? job.requirements
          .split(",")
          .map((req) => `- ${req.trim()}`)
          .join("\n")
      : ""
  }
  className="bg-transparent sm:text-lg"
/>



      {!isRecruiter && (
        <ApplyJobDrawer
          job={job}
          user={user}
          fetchJob={() => {}}
          applied={job?.applications?.find((ap) => ap.candidate_id === user?.id)}
        />
      )}

      {job?.applications?.length > 0 && isRecruiter && (
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-4 text-xl ml-1">Applications</h2>
          {job.applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPage;
