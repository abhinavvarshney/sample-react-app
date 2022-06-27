import { useState, useEffect } from "react";
import axios from 'axios';

const Movies = () => {
    const [movieData, setMovieData] = useState([]);
    const domain = "https://gateway.marvel.com:443/v1/";
    const apikey = `?ts=1&apikey=3f9fc87a02221b79c73f388bda2188e9&hash=b52d59fdb9b2d2838e93da626236ed84`;
    const fetchData = async () => {
        const { data } = await axios.get(`${domain}/public/characters${apikey}`);
        if (data && data.data && data.data.results) {
            setMovieData(data.data.results);
        }
        console.log(movieData);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container mt-2 mb-2">
            {movieData.map((el, idx) => (
                    <div key={idx} className="card mb-2">
                        <div className="card-header">
                        <b>{el.name}</b>
                        </div>
                        {el.description && <ul className="list-group list-group-flush">
                            <li className="list-group-item">{el.description}</li>
                        </ul>}
                        {
                            el.thumbnail.path &&
                            <img src={`${el.thumbnail.path}.jpg`}/>
                        }
                    </div>
            ))}
        </div>


    )
}

export default Movies