import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function Ship() {
    let params = useParams()
    let [selectedShip, setSelectedShip] = useState([])

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${params.shipId}`)
            .then(res => res.json())
            .then((data) => {
                setSelectedShip(data)
            })
    }, [params])

    return (
        <div>
            {selectedShip.name}
        </div>
    )
}