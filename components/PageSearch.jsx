import React, { Component } from 'react';

//material-ui
import {ListItem, makeSelectable, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'; 
import {fetchUsers} from '../actions/UserActions';  
import PropTypes from 'prop-types';
import wrapState from './SelectedList' 
import Divider from 'material-ui/Divider'; 
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

//icons
import ActionOfflinePin from 'material-ui/svg-icons/action/offline-pin';
import {orange500, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ContentSort from 'material-ui/svg-icons/content/sort';

//lodash 
import sortBy from 'lodash/sortBy' 

const jumbotronStyle = {
	color: '#00B1E1',
    fontSize: 13 
};

const textStyle = {
	backgroundColor: 'blue'    
};
 
const individer = {
  backgroundColor: '#90A4AE'  
}; 

const styles = { 
  underlineStyle: {
  // borderColor: 'white',
  // width:'70px' ,
   //display:'none' 
   underlineShow:false
  } ,
  textFieldStyle:{
    margin:'0px 0px 0px 25px', 
    fontSize:15,
    paddingLeft:'2px',
    paddingTop:'2px' ,
    height:'30px',position:'relative',top:'5px' 
  } ,
  inputStyle:{
    bottom:'9px',
    color:'white'
  }
};

let SelectableList = makeSelectable(List); 
  SelectableList = wrapState(SelectableList);
  
export default class PageSearch extends Component{  

    constructor(){
    super();
    this.state={inputText: "", dividerColor:'grey' }; 
    }   

     handleClick(keyData) {   
     this.setState({keyData:keyData}); 
     this.props.callBackFromSearchPage(keyData);  
    } 
 
    /*componentWillReceiveProps(keyData) {
      this.setState({
      currentKey: this.state.keyData 
      }); 
    }*/

   sortAscending(empName) {  
     this.setState ( 
      {sorted:sortBy(empName, function(o) { return o.firstName; })}
      );
    }
  
    render(){  
        
        let that=this; 
        let languages;
       
        if(!this.state.sorted){
            languages = this.props.items 
        }else languages=this.state.sorted

        let  inputText = this.state.inputText.trim().toLowerCase();  
        if(inputText.length > 0){
            languages = languages.filter(function(emp){
                const fullName = emp.firstName+emp.lastName;
                return fullName.toLowerCase().match(inputText);
            }); 
        }   
   
    	   return( 
    				<div className="container"> 
    				   <div style={{backgroundColor:'#7986CB' ,marginBottom:'9px',height:'46px' }}>
    				    	 <TextField style={styles.textFieldStyle}
                    id="text-field-search"
                    inputStyle={styles.inputStyle}
                    hintText='Search' 
                    hintStyle= {{color:'#C5CAE9'}}                    
                    // underlineStyle={styles.underlineStyle}
                    underlineShow={false}
                    value={this.state.inputText}
                    onChange={e => this.setState({inputText: e.target.value})}
                     />  

                    <IconButton 
                      onClick={this.sortAscending.bind(this,this.props.items)}
                    >
                      <ContentSort color='white'/>



                    </IconButton>
 
                </div>  
                  { 
                     languages.map(function(emp,index){ 
 

                      return(
                            <SelectableList defaultValue={0}  
                             className="list-group-item" key={index}>           
                              <ListItem className="listItem" 

                                 rightIcon={<ActionOfflinePin />}

                                 value={emp.index} 
                                 onClick={that.handleClick.bind(that,emp.id)}   
                                 primaryText={emp.firstName+" "+emp.lastName}
                                
                                 secondaryText={
                                  <p>
                                     {emp.grade} , {emp.division} <br />
                                     {emp.location}  ,  {emp.phone}
                                  </p>
                                    
                                }
                                secondaryTextLines={2}
                                leftAvatar={<Avatar size={50} src={emp.avatar} />} 
                            >
                            </ListItem >  
                            <Divider style={{backgroundColor: that.state.dividerColor }} />   
                          </SelectableList>    
                      ) 
                    }) 
                  }  

		  </div>
  );

  }

}
 
