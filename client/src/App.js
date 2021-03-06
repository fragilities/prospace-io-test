import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Overview from './containers/Overview.jsx';
import Company from './containers/Company.jsx';

function App() {
	return (
		<div className="min-h-screen flex justify-center">
			<div className="w-4/5">
				<Switch>
					<Route path="/overview">
						<Overview />
					</Route>
					<Route path="/company/:id">
						<Company />
					</Route>
					<Route path="/">
						<Redirect to="/overview" />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
