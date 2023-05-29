import CandidateRow from "./CandidateRow";
import axios from "axios";
import React,{useState, useEffect} from "react";
import PendingRow from "./PendingRow";




const Pending = () =>{
    const [pending, setPending] = useState([])

useEffect(()=>{
    const getPending =async () =>{
        const {data} = await axios.get('/api/candidates/getcandidates', {params:{status:'pending'}})
    setPending(data) 
    }
    getPending();
   
},[])
    return(
       <div className="container" style={{ marginTop: 80 }}>
    <table className="table table-hover table-striped table-bordered">
        <thead>
            <tr>
                <th />
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {pending.map(c => <PendingRow candidate={c}/> )}
            
        </tbody>
    </table>
</div>
 
    );
}

export default Pending

