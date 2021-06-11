import React, { Component } from 'react';
import LaunchItems from './LaunchItems';
import MissionKey from './MissionKey';

export class Launches extends Component {
    
    render() {

        return (
            <div>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKey />
                <LaunchItems />
            </div>
        )
    }
}

export default Launches;