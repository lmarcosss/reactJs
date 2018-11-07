import { todosRef } from "../config/firebase";
import { FETCH_TODOS, FETCH_TODO } from "./types";

export const addToDo = newToDo => async dispatch => {
  let id = todosRef.push().key;
  newToDo.id = id;
  todosRef.child(id).set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const editToDo = (toDoId, newToDo) => async dispatch => {
  todosRef.child(toDoId).set(newToDo);
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
