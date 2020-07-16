const TodoApp = require('./index.ts');
const {should} = require('chai');
should();

describe("TodoApp", () => {

  it('should add item', () => {
    const initialState = {
      items: []
    };

    const action = {
      type: '@@ACTION_TYPE/AddItem',
      payload: {
        text: "Remember the milk"
      }
    };

    const newState = TodoApp(initialState, action);

    newState.should.not.be.null;
  });

});
