import axios from "axios";
import React from 'react';

const BASE_URL='http://localhost:8000';

 

export{fetchUsers,submit};
function fetchUsers(){

	const url=`${BASE_URL}/employees`;
	return axios.get(url).then(response => response.data);
 
}


function submit(value){

}