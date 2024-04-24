import { useEffect, useState } from "react";
import Job from "../Job/Job";




const Featuredjobs  = () => {
    const[Datalength, setDataLength]=useState(4);
const [jobs, setJobs]= useState([]);
useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data=> setJobs(data));
  
}, []);
    return (
        <div>
        <div className="text-center">
            <h1 className="text-center text-5xl">Featured Jobs{jobs.length}</h1>
            <h2 className="text-xl">Explore thousands 
            of job opportunities with all
             the information you need. Its your future</h2>
        </div>
       <div className=" grid grid-cols-2 gap-3 ">
        {
           jobs.slice(0,Datalength).map(job => <Job key={job.id } job={job}></Job>)
        }
       </div>
       {/* 
       Turnery condition====>

       <div className= {Datalength === jobs.length ? 'hidden': ''}> */}


       <div className= {Datalength === jobs.length && 'hidden'}>
        
      <div className="text-center" >
      <button   onClick={()=> setDataLength(jobs.length)}
         className="btn btn-info text-1xl">Sell all Jobs
         </button>
      </div>
     
       </div>
        </div>
    );
};

export default Featuredjobs;