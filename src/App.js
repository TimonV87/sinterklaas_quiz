import React from 'react';
import './App.css';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import IntroComponent from './IntroComponent';
import QuizComponent from './QuizComponent';
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#d32f2f',
		}
	},
});

function App() {
	return (
		<ThemeProvider theme={theme} >
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">
						Sinterklaas quiz
						</Typography>
				</Toolbar>
			</AppBar>
			<Container maxWidth="lg">
				<Router>
					<Switch>
						<Route path="/" exact component={IntroComponent} />
						<Route path="/quiz" exact component={QuizComponent} />
					</Switch>
				</Router>
			</Container>
		</ThemeProvider>
	);
}

export default App;
