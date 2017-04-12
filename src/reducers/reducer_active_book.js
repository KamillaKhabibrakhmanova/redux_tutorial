//all reducers have two arguments - state & action
//state: not application state, only the state this reducer is responsible for
//action: the action that occured
//most redux reducers are switch statements
export default function(state = null, action) {
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}

	return state
}