//contains all the different action creators we are going to make

export function selectBook(book) {
	//selectBook is an ActionCreator, it needs to return an action,
	//an object with a type property
	//an action always containts a type (uppercase, usually a string)
	//sometimes also contains a payload
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};

};

