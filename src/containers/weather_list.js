import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table tablehover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => { // set state to variable
  return { weather };
}

export default connect(mapStateToProps)(WeatherList); // connect state to props
