import { useEffect, useState } from "react";
import CandidateRow from "./CandidateRow";
import axios from "axios";

const Refused = () => {
    const [refused, setRefused] = useState([])
    const [hideNotes, setHideNotes] = useState(false)

    useEffect(() => {
        const getRefused = async () => {
            const { data } = await axios.get('/api/candidates/getCandidates', { params: { status: 'refused' } })
            setRefused(data);
        }
        getRefused();
    })
    const onToggleClick = ()=>{
        setHideNotes(!hideNotes)
      }
    return (

        <div className="container" style={{ marginTop: 80 }}>
            <div>
                <h1>Refused</h1>
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
                            {refused.map(r => <CandidateRow candidate={r} hide={hideNotes} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Refused

