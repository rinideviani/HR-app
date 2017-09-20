import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
 
          <AppBar title=" " /> 
            {
               /* 
               <h1 style={defaultStyle} >Employee name</h1>
               <TodoTextInput newTodo
                onSave={this.handleSave.bind(this)}
                placeholder="Add new employee" />*/
            }
 
          
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
