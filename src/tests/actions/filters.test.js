// 5 action generators and 6 test cases
import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';


test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
}); 

// two for set text filter.  one that passes a value, and one that relies on default to clear ,
//import the proper test cases!!!  10 passing tests

test ('should generate set text filter action object with provided values', () => {
  const text = 'Something goes here!';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test ('should generate set text filter action object default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });     
});

test ('should generate sort by date filter action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test ('should generate sort by amount filter action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});