// Expenses Reducer:
const expensesReducerDefaultState = [];  //default state for the reducer in the next line

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,  //spread out expenses., then overide:
            ...action.updates //return new object changing expense 
          };
        } else {
          return expense; //this returns if no changes are made
        };
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};

