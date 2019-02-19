import React from 'react'
import PropTypes from 'prop-types'
import './MovieCard.scss'
import StarsRating from '../starsRating'

const MovieCard = ({
  id,
  image,
  imageName,
  year,
  title,


}) => (
    <div className="movie-card">

      <div className="header">

        <img src={image} alt={imageName} className="image" />
        <StarsRating />
      </div>

      <div className="body">

        <div className="title">
          {title}
        </div>

        <div className="footer">
          <div>
            {year}
          </div>
          <div style={{ paddingLeft: '30px ' }}>

          </div>
        </div>


      </div>
    </div>
  )

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,

}

export default MovieCard
