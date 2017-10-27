import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos'; 

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'
import * as UserActions from '../actions/UserActions'
import { EmployeeDetailTab }  from '../components/EmployeeDetailTab'; 
import { EmployeeAddForm } from '../components/EmployeeAddForm'

import {fetchUsers} from '../actions/UserActions';

class App extends Component {


  constructor(){
    super(); 
    this.state={ users: [] };  
  } 
   
  getUsersDetail(){
    fetchUsers().then((users) => {
      this.setState({ users }); 
    });
  }

  componentDidMount(){
      this.getUsersDetail();
  }  
 
  mainAppCallBack = (keyData) => { 
          this.setState({keyData:keyData});   
  }   

  
  render() {  
    const {empData, actions } = this.props ;
       
    const i=(this.state.keyData)-1; 
    return (
      <div className="app"> 
          <MuiThemeProvider muiTheme={theme}>

              {(this.props.location.pathname === "/")? 

              <div id="mainSection" style={{display: 'flex'}}> 
                    
                 <MainSection items={this.state.users}
                  callBackFromMainSection={this.mainAppCallBack}/> 

                 <div>
                <EmployeeDetailTab tabKey={this.state.users[i]}  />  
              </div>
              </div> : 

               <EmployeeAddForm/> 
            } 
          </MuiThemeProvider>   
      </div>
    );
  }
}

App.propTypes = { 
  actions: PropTypes.object.isRequired  
};


//Map the state to props
function mapStateToProps(state,ownProps) {
   
  return {
    empData: state.empData 
  };
}
  

//Map the action to props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)  
  };
}

//connect them component to the Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
