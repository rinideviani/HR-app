import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs'; 
import EmployeeProfileContainer from './EmployeeProfileContainer'; 

//icons
import HomeIcon from 'react-icons/lib/fa/home'
import IoPerson from 'react-icons/lib/io/person'
import IoClock from 'react-icons/lib/io/clock'
import GoLocation from 'react-icons/lib/go/location'
 
import MdPeople from 'react-icons/lib/md/people'
import MdInfo from 'react-icons/lib/md/info'


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400 
  } 
};

 export class EmployeeDetailTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a' 
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value 
    });
  };

  render() { 

    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange} >
        
        <Tab icon={<IoPerson />} value="a">
           <div > <EmployeeProfileContainer />  </div>   
        </Tab>

        <Tab icon={<IoClock />} value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab  icon={<MdInfo />}  value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab C</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab icon={<MdPeople />} value="d">
          <div>
            <h2 style={styles.headline}>Controllable Tab D</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab icon={<HomeIcon />} value="e">
          <div>
            <h2 style={styles.headline}>Controllable Tab E</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab icon={<GoLocation />} value="f">
          <div>
            <h2 style={styles.headline}>Controllable Tab F</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
 