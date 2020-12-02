import React, { useState } from 'react';
import { request } from '../../api/api';
import './FindMovie.scss';

export const FindMovie = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movie, setMovie] = useState({});
  // const [movieList, setMovieList] = useState([]);

  async function findMovie() {
    const film = await request(movieTitle);

    setMovie(film);
    // eslint-disable-next-line no-console
    console.log(movie);
  }

  const handleChange = (event) => {
    const title = event.target.value;

    setMovieTitle(title);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  // };

  return (
    <>
      <form>
        <input
          value={movieTitle}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={findMovie}
        >
          Find Movie
        </button>
        <button
          type="submit"
          // onClick={handleSubmit}
        >
          Add movie to the list
        </button>
      </form>
    </>
  );
};

// FindMovie.propTypes = {};
// import PropTypes from 'prop-types';
