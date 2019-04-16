import React from 'react';
import { Link } from 'react-router-dom';

export default class Details extends React.Component {

  constructor() {
    super();
    debugger;
    this.state = {
        welcomeMessage: 'Welcome to the Gallery page, WIP!!.'
    };
  }

  componentDidMount() {
    debugger;
    setTimeout(() => {
      this.setState({
        welcomeMessage: 'The best is yet to come!'
      });
    }, 3000);
  }

  render() {
    debugger;
    return (
      <div><h1>{this.state.welcomeMessage}</h1>
      <Link to='/'>Back to homepage</Link>
      </div>
    );
  }
}