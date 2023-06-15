export const Movie = (props) => {
    const { title, imgUrl, description } = props;
    const showme = (e, first) => {
        return (
            alert("Hi I am here", e, first)
        );

    };
    return (
        <article className="show-time">
            <img src={imgUrl} alt="movies new release" />
            <h1 style={{ color: 'red' }}>{title}</h1>
            <p style={{ color: 'black' }}>{description}</p>
            <button className="button" onClick={(e) => showme(e, "ram")}>Show</button>
        </article>
    );

};
