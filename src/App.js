import React from 'react';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Item from './Item';
import List from './List';
import Head from './Head';

import { addItem } from './actions';

function App(props) {
	return (
		<div className="App">
			<Head />
			<header>
				<h1>to-do list</h1>
			</header>
			<article>
				<List />
			</article>
			<footer>
				<button onClick={ props.addItem }>Add Item</button>
			</footer>
		</div>
	);
}

export default connect(null, { addItem } )(App);
