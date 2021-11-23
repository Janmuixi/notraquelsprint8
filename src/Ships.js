import { Link, Outlet } from "react-router-dom";

export default function Ships({ ships }) {
    function getId(url) {
        return url.substr(url.lastIndexOf('/') - 2).replace(/\\|\//g,'')
    }
    return (
        <ul>
            { ships.map((ship, index) => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/ships/${getId(ship.url)}`}
                    key={index}
                >
                    {ship.name}
                </Link>
            )) }
            <Outlet />
        </ul>
    )
}