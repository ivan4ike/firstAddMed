import React from "react";
import "./App.css";
import Header from "./components/Header/Headet";
import Sections from "./components/Sections/Sections";
import { Switch, Route, Redirect, Link, withRouter } from "react-router-dom";
import Receptions from "./components/Receptions/Receptions";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import EventsContainer from "./components/Events/EventsContainer";
import EventItem from "./components/Events/EventItem/EventItem";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.header.name != prevProps.header.name) {
      return this.props.history.push("/");
    }
  }

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        this.props.header.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <this.PrivateRoute exact path="/" component={Sections} />
          <this.PrivateRoute path="/receptions" component={Receptions} />
          <this.PrivateRoute path="/events" component={EventsContainer} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    header: state.header,
  };
};

const mapDispacthToProps = (dispacth) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispacthToProps)(App));
