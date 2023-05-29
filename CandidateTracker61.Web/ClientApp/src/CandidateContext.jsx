import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';

const candidateContext = createContext();

const CandidateContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0)
    const [confirmedCount, setConfirmedCount] = useState(0)
    const [refusedCount, setRefusedCount] = useState(0)

    const refreshCandidatesCount = async () => {
        const  pending  = await axios.get('/api/candidates/GetCountForStatus', {params:{status:'pending'}});
        setPendingCount(pending.data)     
        const  confirmed  = await axios.get('/api/candidates/GetCountForStatus', {params:{status:'confirmed'}});
        setConfirmedCount(confirmed.data)        
        const  refused  = await axios.get('/api/candidates/GetCountForStatus', {params:{status:'refused'}});
        setRefusedCount(refused.data)
    
    }
    useEffect(() => {
        refreshCandidatesCount();
    }, []);

    return (
        <candidateContext.Provider value={{ pendingCount, confirmedCount, refusedCount, refreshCandidatesCount }}>
            {children}
        </candidateContext.Provider>

    )
}
const useCandidateCount = () =>{
    return useContext(candidateContext);
}
export {CandidateContextComponent, useCandidateCount};