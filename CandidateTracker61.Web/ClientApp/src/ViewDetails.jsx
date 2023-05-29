import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCandidateCount } from "./CandidateContext";


const ViewDetails = () => {

    const { refreshCandidatesCount } = useCandidateCount()
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: ''
    })
    const [hideButtons, setHideButtons] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get('/api/candidates/getCandidate', { params: { id: id } });
            setCandidate(data)
        };
        getCandidate();
    }, [])

    const onConfirmClick = async () => {
        await axios.post('/api/candidates/UpdateStatus', { candidate, status: 'confirmed' });
        const copy = { ...candidate, registrationStatus: 'confirmed' }
        setCandidate(copy)
        setHideButtons(true)
        await refreshCandidatesCount()


    }
    const onRefuseClick = async () => {
        await axios.post('/api/candidates/UpdateStatus', { candidate, status: 'refused' });
        const copy = { ...candidate, registrationStatus: 'refused' }
        setCandidate(copy)
        setHideButtons(true)
        await refreshCandidatesCount()

    }

    const { firstName, lastName, email, phoneNumber, registrationStatus, notes } = candidate

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email} </h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: {registrationStatus}</h4>
                        <h4>Notes: {notes}</h4>
                        <p />
                        {!hideButtons && <div>
                            <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                            <button className="btn btn-danger" onClick={onRefuseClick}>Refuse</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ViewDetails