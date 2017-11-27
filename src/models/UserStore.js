// observables - pieces of state that cause reactions and computations in response to their own changes
// actions - functions that are allowed to modify state in strict mode
// computed observables - pieces of state that are derived from observables
// useStrict - a method used to activate strict mode
import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

// strict mode enforces that all modifications to the observable state must be made by actions; it adds a little bit more predictability to the system
useStrict(true);

class UserStore {
  // values marked as 'observable' can be watched by 'observers'
  @observable users = [];
  @observable selectedUser = {};

  // computed value represented as getter functions in the store class, which makes them available afterwards as properties
  @computed get selectedId() {
    return this.selectedUser.id;
  }

  // in strict mode, only actions can modify mobx state
  @action setUsers = (users) => {
    this.users = [...users];
  }
  @action selectUser = (user) => {
    this.selectedUser = user;
  }
  // manages how observable state is cleared
  @action clearSelectedUser = () => {
    this.selectedUser = {};
  }
  @action getUsers() {
  	axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      // modifying the store inside a then statement would lead to an error in strict mode
  	  this.setUsers(response.data);
  	});
  }
}

const store = new UserStore();

export default store;
export { UserStore };
