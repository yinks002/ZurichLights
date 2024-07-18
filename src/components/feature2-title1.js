import React from 'react'

import PropTypes from 'prop-types'

import './feature2-title1.css'

const Feature2Title1 = (props) => {
  return (
    <div className="feature2-title1-container">
      <h2 className="thq-heading-2">{props.feature2Title}</h2>
    </div>
  )
}

Feature2Title1.defaultProps = {
  feature2Title: 'Energy security',
}

Feature2Title1.propTypes = {
  feature2Title: PropTypes.string,
}

export default Feature2Title1
