import { MdLocationOn } from "react-icons/md";
import { AiTwotoneDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo ,job_title, company_name, remote_or_onsite, location,
 job_type ,salary ,job_description ,educational_requirements, experiences} = job;
    return (
        <div className="card card-compact  bg to-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div >
        <button className="px-5 py-2 font-extrabold border rounded border-[#9873FF] mr-4 text-[#7E90FE] ">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-[#9873FF] mr-4 text-[#7E90FE] ">{job_type}</button>
    </div>
    <div className=" mt-6 flex gap-3 text-2xl">
      <h1 className="flex gap-2 "> <MdLocationOn className="text-3xl "></MdLocationOn> {location} </h1>
      <h1 className="flex gap-2"> <AiTwotoneDollar className="text-3xl"></AiTwotoneDollar>   {salary}</h1>
      
    </div>
  


    <div className="card-actions ">
<Link to={`/job/${id}`}>
  <button className=" from-indigo-500 btn btn-primary ">View details</button>
  </Link>

    </div>
  </div>
</div>
    );
};

export default Job;