import axios from "axios";
import React from 'react';

const BASE_URL='http://localhost:9000';

export{fetchUsers};

function fetchUsers(){

	const url=`${BASE_URL}/emp`;
	return axios.get(url).then(response => response.data);

  
}