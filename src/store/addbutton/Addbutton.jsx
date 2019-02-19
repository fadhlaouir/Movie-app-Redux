import React, { Component } from 'react'
import './Addbutton.scss'
import { Card } from 'react-md';
import StarRating from '../starsRating'

const style = { maxWidth: 230 };
class Addbutton extends Component {
  state = {
    showMovieInfo: false,
    image: '',
    title: '',
    year: ''
  };
  handleImageChange = (value) => {
    this.setState({
      image: value
    })
  }
  handleTitleChange = (value) => {
    this.setState({
      title: value
    })
  }
  handleYearChange = (value) => {
    this.setState({
      year: value
    })
  }

  handleValidate = () => {
    const newMovie = {
      id: '99',
      image: this.state.image,
      imageName: 'Whiteboyz',
      year: this.state.year,
      title: this.state.title,

    }
    this.props.onAddMovie(newMovie)

  }

  render() {
    const { showMovieInfo, image, title, year } = this.state;
    // const { onAddMovie } = this.props



    return (
      <div>
        <Card style={style}>
          <img onClick={() => this.setState({
            showMovieInfo:
              !this.state.showMovieInfo
          })}
            src="https://pngimage.net/wp-content/uploads/2018/06/icon-add-png-7.png" alt="add" className="add_icon"

          />
        </Card>
        {showMovieInfo ? (
          <Card style={style}>

            <h4>Add Movie </h4>
            <ul className="list-group">
              <li className="list-group-item">
                Image Link :
              <input type="text" name="image" value={image} onChange={(e) => this.handleImageChange(e.target.value)} />
              </li>
              <li className="list-group-item">
                Movie Title :
              <input type="text" name="title" value={title} onChange={(e) => this.handleTitleChange(e.target.value)} />
              </li>
              <li className="list-group-item">
                Year :
              <input type="number" name="year" value={year} onChange={(e) => this.handleYearChange(e.target.value)} />
              </li>
              <li className="list-group-item">
                rating :
              <StarRating />
              </li>
              <button type="button" onClick={this.handleValidate}>validate</button>
            </ul>

          </Card>

        ) : null}
      </div>
    )
  }
}
export default Addbutton;