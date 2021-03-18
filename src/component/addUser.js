import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddUser = () => {
    this.props.addUser(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button  onClick={this.handleAddUser}>
          Add User
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(AddUser);

