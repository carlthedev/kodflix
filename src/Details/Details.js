import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery-get';
import './Details.css';

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
    if (this.state.show === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div className='Details'>
          <h1>{this.state.show.name}</h1>
          <div className='container'>
            <div>{this.state.show.details}</div>
            <img
              src={this.state.show.cover}
              alt={this.state.show.name} />
          </div>
          <Link to='/'>Back to homepage</Link>
        </div>
      );
    }
  }
}