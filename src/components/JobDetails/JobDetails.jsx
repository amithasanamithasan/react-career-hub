import { useLoaderData, useParams } from "react-router-dom";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineFilterFrames } from "react-icons/md";

import { FiPhone } from "react-icons/fi";

import { MdOutlineEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";

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
            <h3 className="text-center font-serif  text-3xls">Job details:{job.job_title}</h3>
            <div className="grid md: grid-cols-4 gap-5">
                <div className="border md: col-span-3">
                <h2 className="text-2xl py-4"> Details coming heres </h2>
                <h1 className="font-semibold ">Job Description: </h1>
                <p className="flex">{job.job_description}</p>
                <h1 className="font-semibold ">Job Responsibility: </h1>
                <p>{job.job_responsibility}</p>
                <h1 className="font-semibold ">Educational Requirements: </h1>
                <p>{job.educational_requirements}</p>
                <h1 className="font-semibold">Experiences:</h1>
                <p>{job.experiences}</p>
                </div>
                
                <div className="border ">
                    <h3 className="font-serif text-center p-4 bg-fuchsia-300">Job Details:</h3>
                    <p>------------------------------------------</p>
                    <div>
                    <h1></h1>
                    <h2 className="font-serif flex gap-2 p-2"><AiOutlineDollarCircle></AiOutlineDollarCircle> Salary: {job.salary}</h2>
                    <p></p>

                    <h1 className="font-serif flex gap-2"><MdOutlineFilterFrames></MdOutlineFilterFrames>Job Title:Product Designer</h1>
                   
                    <p> </p>

                   
                    </div>
                 
                   
                    <div className=" mr-0">
                    <h1  className="font-serif p-4 text-center   bg-emerald-300">Contact Information:</h1>
                    <p>------------------------------------------</p>
                    
                    <h1 className="font-serif flex gap-2 p-2"><FiPhone ></FiPhone>Phone: {job.contact_information.phone}</h1>
                   

                    <h1 className="font-serif flex gap-2 p-2"> <MdOutlineEmail></MdOutlineEmail>Email {job.contact_information.email}</h1>
                   
                    <h1 className="font-serif flex gap-2 p-2"><FaRegAddressCard className="text-2xl"></FaRegAddressCard>Address {job.contact_information.address}</h1>
                    <p></p>
                    </div>
                    
                    <button className="btn btn-info rounded bg-cyan-600 ">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;
