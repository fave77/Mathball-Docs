import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Navbar from "./Navbar";
import Docs from "./Docs";
import MainContent from "./Main-Content";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
			<Router>
				<div className="App">
					<ErrorBoundary>
						<Navbar/>

						<Switch>
							<Route exact path="/" component={MainContent}/>
							<Route path="/docs" component={Docs}/>
						</Switch>

						<Footer/>
					</ErrorBoundary>
				</div>
			</Router>
    );
  }
}

export default App;
