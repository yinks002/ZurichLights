import React from 'react'

import PropTypes from 'prop-types'

import './feature1-title.css'

const Feature1Title = (props) => {
  return (
    <div className="feature1-title-container">
      <h2 className="thq-heading-2">{props.feature1Title}</h2>
    </div>
  )
}

Feature1Title.defaultProps = {
  feature1Title: 'Hydropower main source of energy',
}

Feature1Title.propTypes = {
  feature1Title: PropTypes.string,
}

export default Feature1Title
