import React, { Component } from 'react';
import {ListItem, makeSelectable, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'; 

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
        this.state = {
            term: "" 
        };
    }

    render(){

        let languages = this.props.items,
        	term = this.state.term.trim().toLowerCase();

        if(term.length > 0){

            languages = languages.filter(function(l){
                return l.name.toLowerCase().match( term );
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
 
				    	<input className="form-control" value={this.state.term} onChange={e => this.setState({term: e.target.value})} placeholder="Search" />
                        <br/> 
                        
				    	<hr/> 

				     	<ul className="list-group">
				     	{ 
				     		languages.map(function(l){
                            	return <SelectableList defaultValue={0}   className="list-group-item" key={l.name}>           
                                        
                                    <ListItem
                                        value={l.id}
                                        primaryText=  {l.name}
                                        leftAvatar={<Avatar src="images/ok-128.jpg" />} 
          
                                    />     
                                </SelectableList>    
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
