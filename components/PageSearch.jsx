import React, { Component } from 'react';
import {ListItem, makeSelectable, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'; 
import {fetchUsers} from '../actions/UserActions';

let SelectableList = makeSelectable(List);

const jumbotronStyle = {
	backgroundColor: '#337ab7',
    fontSize: 20 
};

const textStyle = {
	color: '#fff'  
};
 

 
export default class PageSearch extends Component{ 
    constructor(){
        super();
        this.state={ inputText: "" };
    }
  
    render(){  
        let languages = this.props.items, 
        inputText = this.state.inputText.trim().toLowerCase(); 
 
        if(inputText.length > 0){
            languages = languages.filter(function(emp){
                const fullName = emp.firstName+emp.lastName;
                return fullName.toLowerCase().match(inputText);
            }); 
        } 

    	return(
    		<div>
	    		<div className="jumbotron text-center" style={jumbotronStyle}>
				  <h1 style={textStyle}><i className="fa fa-code"></i>  </h1> 
				</div>
	  
				<div className="container"> 
				  <div className="row text-center"> 
				    <div className="col-md-4 col-md-offset-4"> 
				    	<input className="form-control" 
               value={this.state.inputText} 
               onChange={e => this.setState({inputText: e.target.value})}
               placeholder="Search" /> 
              <br/>        
				    	<hr/>  
              <ul className="list-group">
				     	{ 
				     		languages.map(function(emp,index){ 
                  return(<SelectableList defaultValue={0}
                  className="list-group-item" key={emp.id}>           
                    <ListItem
                      value={emp.id}
                      primaryText={emp.firstName+" "+emp.lastName}
                      leftAvatar={<Avatar src={emp.avatar} />} 
                    />     
                  </SelectableList>   
                  ) 
                })
              }
						</ul>

				  </div>    
				</div>
			</div>
		</div>
  );

  }

}
