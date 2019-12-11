import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showIt: PropTypes.number.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  onChange = e => {
    this.setState({
      //text: e.target.value
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something to search for...", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: ""
      });
    }
  };
  render() {
    console.log(this.props.showIt);
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search for users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showIt !== 0 ? (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
