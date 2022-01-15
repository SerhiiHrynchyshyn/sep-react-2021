import React from 'react';
import '../../App.css';

const Ships = (props) => {
    let {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div className={'wrap'}>
            <div>
                <h2>{mission_name}</h2>
                <p>{launch_year}</p>
            </div>
            <img src={mission_patch_small} alt=""/>
        </div>
    );
};

export default Ships;