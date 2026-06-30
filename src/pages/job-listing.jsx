import { useEffect, useState } from "react";
import { State } from "country-state-city";
import dummyJobs from "@/data/dummy-jobs"; 
import { Heart } from "lucide-react";

import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const [jobs, setJobs] = useState(dummyJobs);
  const [companies, setCompanies] = useState([]);
  const [likedJobs, setLikedJobs] = useState({}); // ✅ New state

  useEffect(() => {
    const uniqueCompanies = [
      ...new Set(dummyJobs.map((job) => job.company.name)),
    ].map((name) => {
      const job = dummyJobs.find((job) => job.company.name === name);
      return { id: name, name };
    });

    setCompanies(uniqueCompanies);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  useEffect(() => {
    const filtered = dummyJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = location ? job.location === location : true;
      const matchesCompany = company_id
        ? job.company.name === company_id
        : true;

      return matchesSearch && matchesLocation && matchesCompany;
    });

    setJobs(filtered);
  }, [searchQuery, location, company_id]);

  const clearFilters = () => {
    setSearchQuery("");
    setCompany_id("");
    setLocation("");
  };

  // ✅ Toggle Like
  const toggleLike = (jobId) => {
    setLikedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  return (
    <div className="">
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Jobs
      </h1>

      <form onSubmit={handleSearch} className="h-14 flex flex-row w-full gap-2 items-center mb-3">
        <Input
          type="text"
          placeholder="Search Jobs by Title.."
          name="search-query"
          className="h-full flex-1 px-4 text-md"
        />
        <Button type="submit" className="h-full sm:w-28" variant="blue">
          Search
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-2">
        <Select value={location} onValueChange={(value) => setLocation(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {State.getStatesOfCountry("IN").map(({ name }) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={company_id} onValueChange={(value) => setCompany_id(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {companies.map(({ name, id }) => (
                <SelectItem key={id} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="sm:w-1/2" variant="destructive" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              liked={likedJobs[job.id] || false}
              onToggleLike={() => toggleLike(job.id)}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No jobs found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListing;
