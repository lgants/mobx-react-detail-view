// PureComponent is exactly like React.Component, but implements shouldComponentUpdate() with a shallow prop and state comparison
// import React, { PureComponent } from 'react';
import React, { Component } from 'react';
// MobX has its own set of PropTypes
import { observer, PropTypes, inject } from 'mobx-react';
import _ from 'lodash';

import Selection from './Selection';
import Profile from './Profile';

const propTypes = {
  store: PropTypes.observableObject
};

@inject("store")
// observer is used to modify an existing component so that it responds to changes in a MobX Store
@observer
class App extends Component {
  componentWillMount() {
    this.props.store.getUsers();
  }

  // decides when to render the Selection and close button
  renderSelection() {
    if (_.isEmpty(this.props.store.selectedUser)) return null;

    return (
      <div className='selection'>
      	<Selection user={this.props.store.selectedUser}/>
      	<button onClick={this.props.store.clearSelectedUser}>
          Close Profile
        </button>
      </div>
    );
  }

  // method renders a list of Profiles based on the users array of our store
  renderProfiles() {
    return this.props.store.users.map(user => (
	    <Profile
		    selected = {user.id === this.props.store.selectedId}
        key = {user.id}
		    label = {user.name}
        onClick = { () => {this.props.store.selectUser(user)} }
	    />
    ));
  }

  render() {
  	return (
  	  <div>
    		<h3>Employee Directory</h3>
    		{this.renderSelection()}
    		{this.renderProfiles()}
  	  </div>
  	);
  }
}

App.propTypes = propTypes;
export default App;
