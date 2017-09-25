import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import DividerProfileList from './ProfileDetail';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400 
  } 
};

 export class TabsExampleControlled extends React.Component {

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
        onChange={this.handleChange}
      >
        <Tab label="Profile" value="a">
           <div > <DividerProfileList />  </div>   
        </Tab>
        <Tab label="History" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab label="Grade" value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab C</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab label="Family" value="d">
          <div>
            <h2 style={styles.headline}>Controllable Tab D</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab label="Address" value="e">
          <div>
            <h2 style={styles.headline}>Controllable Tab E</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
            
            <Tab label="Location" value="f">
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
 