import React, {useState, useEffect} from "react"
import axios from "axios"
import CandidateRow from "./CandidateRow"


const Confirmed = () =>{

  const [confirmed, setConfirmed] = useState([])
  const [hideNotes, setHideNotes] = useState(false)

  useEffect(()=>{
      const getConfirmed =async () =>{
          const {data} = await axios.get('/api/candidates/getcandidates', {params:{status:'confirmed'}})
      setConfirmed(data) 
      }
      getConfirmed();
     
  },[])

  const onToggleClick = ()=>{
    setHideNotes(!hideNotes)
  }

    return(
       <div className="container" style={{ marginTop: 80 }}>
  <div>
    <h1>Confirmed</h1>
    <div>
      <button className="btn btn-success"onClick={onToggleClick}>Toggle Notes</button>
      <table className="table table-hover table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
           {!!hideNotes && <th>Notes</th>}
          </tr>
        </thead>
        <tbody>
        {confirmed.map(c => <CandidateRow candidate={c} hide={hideNotes} /> )}                     
          
        </tbody>
      </table>
    </div>
  </div>
</div> 
    )
}
export default Confirmed

