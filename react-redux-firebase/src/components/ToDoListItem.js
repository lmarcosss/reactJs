import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo, editToDo } from "../actions";
import { Input } from "react-materialize";
class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFormValue: this.props.todo
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  handleFormSubmit = (todoId, event) => {
    const { addFormValue } = this.state;
    const { editToDo } = this.props;
    event.preventDefault();
    editToDo(todoId, { title: addFormValue });
    this.setState({ addFormValue: "" });
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };
  render() {
    const { todoId } = this.props;
    const { addFormValue } = this.state;
    console.log(this.props);
    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
        <h4>
          <form onSubmit={event => this.handleFormSubmit(todoId, event)}>
            <Input
              s={6}
              type="text"
              value={addFormValue.title}
              label="First Name"
              onChange={this.handleInputChange}
            />
          </form>
          <span
            onClick={() => this.handleCompleteClick(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  { completeToDo, editToDo }
)(ToDoListItem);
