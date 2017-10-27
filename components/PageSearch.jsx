import React, { Component } from 'react';
import {ListItem, makeSelectable, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'; 
import {fetchUsers} from '../actions/UserActions';  
import PropTypes from 'prop-types';
import wrapState from './SelectedList'

 

const jumbotronStyle = {
	backgroundColor: '#337ab7',
    fontSize: 13 
};

const textStyle = {
	color: '#fff'  
};

let SelectableList = makeSelectable(List);

 SelectableList = wrapState(SelectableList);
  
export default class PageSearch extends Component{ 
    constructor(){
        super();
        this.state={ inputText: ""   };   
    }   

     handleClick(keyData) {   
     this.setState({keyData:keyData}); 
     this.props.callBackFromSearchPage(keyData); 
    }

 

    componentWillReceiveProps(keyData) {
  this.setState({
    currentKey: this.state.keyData 
  });
}

    render(){   
       
      let that=this;
        //console.log('props Search',this.state.keyData);
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
				  <h1 style={textStyle}><i className="search"></i>  </h1> 
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
              
              { 
                languages.map(function(emp){ 

                  return(
                        <SelectableList defaultValue={0}
                        className="list-group-item" key={emp.id}>           
                        <ListItem className="listItem"
                          
                          value={that.state.keyData}
                          onClick={that.handleClick.bind(that,emp.id)}   
                          primaryText={emp.firstName+" "+emp.lastName}
                          secondaryText={
                            <p>
                               {emp.grade} , {emp.division} <br />
                               {emp.location}  ,  {emp.phone}
                            </p>
                              
                          }
                          secondaryTextLines={2}
                          leftAvatar={<Avatar src={emp.avatar} />} 
                        >
                        </ListItem >     
                      </SelectableList>    
                  ) 
                }) 
              } 
						  
				  </div>    
				</div>
			</div>
		</div>
  );

  }

}
