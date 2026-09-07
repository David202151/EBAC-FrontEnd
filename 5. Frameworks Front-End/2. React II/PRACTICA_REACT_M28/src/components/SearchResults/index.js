import React from 'react';
const SearchResults = (props) => {
    super(props);
    const { results } = props;
    results.map((result) => {
        const { id, title, artist, duration } = result;
        return (
            <article key={id}>
                <h3>{title}</h3>
                <p>{artist}</p>
                <p>{duration}</p>
            </article>
        );
    });
};

export default SearchResults;