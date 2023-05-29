import React, { useState, useContext, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import Refused from './Refused';
import Confirmed from './Confirmed';
import ViewDetails from './ViewDetails';
import {CandidateContextComponent} from './CandidateContext';

const App = () => {


    return (
        <CandidateContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/AddCandidate' element={<AddCandidate />} />
                    <Route exact path='/Pending' element={<Pending />} />
                    <Route exact path='/Refused' element={<Refused />} />
                    <Route exact path='/Confirmed' element={<Confirmed />} />
                    <Route exact path='/viewdetails/:id' element={<ViewDetails />} />
                </Routes>
            </Layout>
        </CandidateContextComponent>
    );
}
export default App;  
