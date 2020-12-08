import React from 'react';
import PropTypes from 'prop-types';

function Movie({title,year,summary,poster}) {
    return <h4>{title}</h4>;
}

Movie.propTypes = {
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
}

export default Movie;