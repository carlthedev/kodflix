import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './gallery-get';

export default class Details extends React.Component {

  constructor() {
    super();
    this.state = {
        show: {}
    };
  }

  componentDidMount() {
    let tvshowId = this.props.match.params.tvshowId;
    let show = getGallery()
      .find((show) => show.id === tvshowId);
      this.setState({ show });
  }

  render() {
    if(this.state.show === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div><h1>{this.state.show.name}</h1>
        <Link to='/'>Back to homepage</Link>
        </div>
      );
    }
  }
}