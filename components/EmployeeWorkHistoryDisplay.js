import React from "react";
import ReactDOM from "react-dom";  

//added for display 
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 
import Avatar from 'material-ui/Avatar';   
import Subheader from 'material-ui/Subheader'; 


//icons 
import ContentInbox from 'material-ui/svg-icons/communication/business';
 
export default class EmployeeWorkHistoryDisplay extends React.Component{

	render(){

	 const mainBody ={ 
	 	display:'flex',
        flex:1,
        width:"900px" ,
        margin : "20px"
      };

       const dividerStyle ={  
        width:"200px" 
      };
		const companyName ={  
        fontWeight: 'bold'
      };
       
 	 
 
		return(
		   
			
			<div style={mainBody}> 

			 
	 		 
				<MobileTearSheet   height={250}> 
 						<List   >
					        <Subheader>
					         <TextField   
					         	underlineStyle={{display: 'none'}}
			                 	disabled={false}
			                	floatingLabelText="January September"
			                	defaultValue="2012    2013"
	             			/><br />
	             			</Subheader> 
					    
					     <Divider style={dividerStyle} />

					    
					         
					        <ListItem style={companyName}
					          primaryText={this.props.company}
					        />
					        <ListItem
					           primaryText={this.props.jobName}
					        />
					        
					    </List>

					

					</MobileTearSheet>

					 
					<MobileTearSheet height={250}>

						<List>
					      <Subheader>JOB DESCRIPTION</Subheader> 
					    </List> 

					    <List>
					         
					        <ListItem
					        leftIcon={<ContentInbox />}
					          primaryText='jobdesc'
					        />
					        <ListItem
					        leftIcon={<ContentInbox />}
					           primaryText=''
					        />
					        
					    </List>
					

				</MobileTearSheet> 

			 
  
			</div>
		  

		)
	}



}