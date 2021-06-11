import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export default function LaunchItems() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if(loading) {
        return <h4>Loading...</h4>
    }
    if(error) {
        console.log(error);
    }
    
    return (
        <Fragment>
        {data.launches.map((launch, idx) => {
            return <LaunchItem key={idx+launch.flight_number} launch={launch} />
        })}
        </Fragment>
    )
}
