import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);

    // if (!Array.isArray(jobs)) {
    //     // Handle case when jobs is not an array (e.g., display loading indicator or error message)
    //     return <div>Loading...</div>;
    // }
    const job =jobs.find(job => job.id === idInt);

       // Check if job is found
    //    if (!job) {
    //     // Handle case when job is not found (e.g., display error message or redirect)
    //     return <div>Job not found!</div>;
    // }
    console.log(job);
    return (
        <div>
            <h3>Job details:{job.job_title}</h3>
            <div className="grid md: grid-cols-4 gap-5">
                <div className="border md: col-span-3">
                <h2 className="text-4xl"> Details coming heres </h2>
                <p>{job.company_name}</p>
                </div>
                
                <div className="border">
                    <h3 className="text-2xl">Side things</h3>
                    <button className="btn btn-info rounded border-t-amber-900">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;
