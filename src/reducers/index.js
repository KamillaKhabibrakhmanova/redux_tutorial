import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//passing objects in combineReducers tells the application how to create our state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
