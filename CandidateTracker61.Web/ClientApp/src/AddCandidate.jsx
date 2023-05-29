import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useCandidateCount } from "./CandidateContext";

const AddCandidate = () => {

    const navigate = useNavigate();
    const {  refreshCandidatesCount } = useCandidateCount()

    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        notes: ''
    })

    const onTextBoxChange = e => {
        const copy = { ...candidate }
        copy[e.target.name] = e.target.value
        setCandidate(copy)

    }
    const onSubmitClick = async () => {
        console.log('submit!')
        await axios.post('/api/candidates/addcandidate', candidate);
        await refreshCandidatesCount()
        navigate('/')
    }

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>

                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="form-control"
                            onChange={onTextBoxChange}
                        />
                        <br />
                        <input type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="form-control"
                            onChange={onTextBoxChange}
                        />
                        <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            onChange={onTextBoxChange}
                        />
                        <br />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="form-control"
                            onChange={onTextBoxChange}
                        />
                        <br />
                        <textarea
                            rows={5}
                            className="form-control"
                            name="notes"
                            defaultValue={""}
                            onChange={onTextBoxChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddCandidate


