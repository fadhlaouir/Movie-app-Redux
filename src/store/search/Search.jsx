import React from 'react'
import { connect } from 'react-redux'
import './Search.scss'

const Search = ({ handleSearch }) => (
  <div className="search">
    <div>
      <label style={{ color: '#fff', fontFamily: 'bold', fontSize: '24', paddingRight: '10px' }}>Search</label>

      <input
        label="Search Movie"
        icon="search"
        onChange={(e) =>
          handleSearch(e.target.value)} />
    </div>
  </div>
)

const mapStateToProps = state => ({
  value: state.Search,
})
const mapDispatchToProps = dispatch => ({
  handleSearch: (Text) => {
    dispatch({
      type: 'FILTER',
      newTitle: Text,
    })
  },
})


// const searchContainer = connect(mapStateToProps)(Search)

export default connect(mapStateToProps, mapDispatchToProps)(Search)

