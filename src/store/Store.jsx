import React from 'react'

import './Store.scss'
import Search from './search'
import MovieCard from './movieCard'
import StarsRating from './starsRating'
import AddButton from './addbutton'
import { Grid, Cell } from 'react-md';
import { connect } from 'react-redux'
// import { addMovie, searchReducer, updateMovie, deleteMovie } from '../store'
const style = { maxWidth: 230, paddingRight: 20 };



const Store = (

  props
) => {
  return (

    <div className="store">

      <div className="container">
        <Grid>
          <Cell size={12}>
            <div className="bar">
              <Search />

              <StarsRating />


            </div>
          </Cell>
        </Grid>


        <div className="card" onDoubleClick={() => props.updateMovie(props.movies)}>
          {props.movies.map(
            (el, index) => (

              <div style={style}
                key={index}
              >
                <Cell desktopSize={6} tabletSize={4} phoneSize={4} >
                  <MovieCard

                    id={el.id}
                    image={el.image}
                    imageName={el.imageName}
                    year={el.year}
                    title={el.title}
                    rating={el.rating}

                  />   <input type='button' value='x' className="delete"
                    onClick={() => {
                      props.deleteMovie(el.id)
                    }}></input>


                </Cell>

              </div>
            )
          )}
        </div>



        <div className="button" style={{ paddingLeft: '120px' }}>
          <AddButton onAddMovie={props.addMovie} />

        </div>
      </div>
    </div>
  )
}



const mapDispatchToProps = (dispatch) => ({
  // addMovie,
  // deleteMovie,
  //   searchReducer,
  addMovie: (movies) => {
    dispatch({
      type: 'ADD_MOVIE',
      movie: {
        id: 'one',
        image: movies.image,
        imageName: movies.imageName,
        year: movies.year,
        title: movies.title
      }
    })
  },
  deleteMovie: (id) => {
    dispatch({
      type: 'DELETE_MOVIE',
      id,
    })
  },
  updateMovie: (movies) => {
    dispatch({
      type: 'UPDATE_MOVIE',
      // id: movies.id,
      movie: {
        image: prompt('image', movies.image),
        title: prompt('title', movies.title),
        imageName: prompt('imageName', movies.imageName),
        year: prompt('year', movies.year)

      },
    })
  },
})



const mapStateToProps = state => ({
  movies: state.addReducer.movies.filter(movie => {
    return (
      movie.title.includes(state.searchReducer)
    )
  })
}
)
export default connect(mapStateToProps, mapDispatchToProps)(Store)