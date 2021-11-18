import Job from './Job';

function JobList({ jobs }) {
  return (
    <>
      {jobs.length !== 0 &&
        jobs.map((job, i) => {
          return <Job key={job.id} job={job} />;
        })}
    </>
  );
}

export default JobList;
