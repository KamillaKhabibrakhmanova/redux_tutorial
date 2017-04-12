//a container that has access to the state that is contained within Redux
//in general, we want the most parent component that cares about a particular piece of state to be a container
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	};
}

//the glue between React and Redux
function mapStateToProps(state) {
	//Whatever is returned will show up as props inside of BookList
	return {
		books: state.books
	};
};

export default connect(mapStateToProps)(BookList);