import React from 'react'

import PropTypes from 'prop-types'

import './feature3-title.css'

const Feature3Title = (props) => {
  return (
    <div className="feature3-title-container">
      <h2 className="thq-heading-2">{props.feature3Title}</h2>
    </div>
  )
}

Feature3Title.defaultProps = {
  feature3Title: 'Renewables',
}

Feature3Title.propTypes = {
  feature3Title: PropTypes.string,
}

export default Feature3Title
