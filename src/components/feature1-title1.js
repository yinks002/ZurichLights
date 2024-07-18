import React from 'react'

import PropTypes from 'prop-types'

import './feature1-title1.css'

const Feature1Title1 = (props) => {
  return (
    <div className="feature1-title1-container">
      <h2 className="thq-heading-2">{props.feature1Title}</h2>
    </div>
  )
}

Feature1Title1.defaultProps = {
  feature1Title: 'Growth of Solar Energy',
}

Feature1Title1.propTypes = {
  feature1Title: PropTypes.string,
}

export default Feature1Title1
