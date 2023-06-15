import React from 'react';
import data from './Comments';
import { Movie } from './Movie';


const App = () => {
    return (
        <section className="movie-container">
            {
                data.map((eachobj, index) => {
                    const { title, imgUrl, description } = eachobj;
                    return <Movie key={index} title={title} imgUrl={imgUrl} description={description} />;
                })
            }
        </section>
    );
};

export default App;