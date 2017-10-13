import React from 'react';
import {   HashRouter as Router, Route } from 'react-router-dom';
import MainSection from '../components/MainSection';
import EmployeeDetailTab from '../components/EmployeeDetailTab';
import App from '../containers/App';



export default  (  
   <Router>
      	<Route exact path="/" component={App} />
      </Router>
);