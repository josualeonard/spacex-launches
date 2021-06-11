import React, { Component } from 'react'
import LaunchContent from './LaunchContent';

export class Launch extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);

        return (
            <div>
                <h1>Launch</h1>
                <LaunchContent flight_number={flight_number} />
            </div>
        )
    }
}

export default Launch
