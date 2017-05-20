import React from "react"
import Popular from "./Popular"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Container } from "../styles"
import Nav from "./Nav"
import Home from "./Home"
import Battle from "./Battle"
import Results from "./Results"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
