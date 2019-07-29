import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Author.css';
//importing store along with action types that we need for this component
import store, {FIRST_NAME, LAST_NAME} from './../../store.js'

class Author extends Component {
  constructor(props) {
    super(props);
    //here we are assigning store.getState() to reduxState and then
    //getting state and assigning it to state on author.js
    const reduxState = store.getState()
    this.state = {
      authorFirst: reduxState.firstName,
      authorLast: reduxState.lastName
    };
  }

  handleAuthorFirstChange(nameVal) {
    this.setState({
      authorFirst: nameVal
    });
  }

  handleAuthorLastChange(nameVal) {
    this.setState({
      authorLast: nameVal
    });
  }
  saveChanges() {
    // Send data to Redux state
    store.dispatch({
      type: FIRST_NAME,
      payload: this.state.authorFirst
    })
    store.dispatch({
      type: LAST_NAME,
      payload: this.state.authorLast
    })
  }
  render() {
    return (
      <div className="Author forms">
        <div className="input_container">
          <h2>Author First Name:</h2>
          <input
            value={this.state.authorFirst}
            onChange={e => this.handleAuthorFirstChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Author Last Name:</h2>
          <input
            value={this.state.authorLast}
            onChange={e => this.handleAuthorLastChange(e.target.value)}
          />
        </div>
        <Link to="/add/name">
          <button onClick={() => this.saveChanges()} className="left_button">
            Previous
          </button>
        </Link>
        <Link to="/add/ingredients">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Author;
