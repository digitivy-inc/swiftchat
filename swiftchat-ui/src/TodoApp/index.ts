import TodoState from './types';

export default (currentState: TodoState = { items: [] }, action:{type: string} = {type: ""} ) => {
  switch(action.type) {
    default:
      return currentState;
  }
};
