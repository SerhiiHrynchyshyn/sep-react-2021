import React, {useEffect, useState} from 'react';
import Ships from "../Ships/Ships";

const Api = () => {
    let [ships, setShips] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(respons => respons.json())
            .then(ships => {
                let noYear = ships.filter(ship => ship.launch_year !== '2020');
                setShips(noYear);
            })

    })
    return (
        <div>
            {ships.map(value => <Ships mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small} />)}
        </div>
    );
};

export default Api;