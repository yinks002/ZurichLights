import React from 'react'

import PropTypes from 'prop-types'

import './feature1-description.css'

const Feature1Description = (props) => {
  return (
    <div className="feature1-description-container">
      <span className="thq-body-small">{props.feature1Description}</span>
    </div>
  )
}

Feature1Description.defaultProps = {
  feature1Description:
    'Recently solar power is increasing significantly, with expectation to reach around 10% of electricity demand in the country.',
}

Feature1Description.propTypes = {
  feature1Description: PropTypes.string,
}

export default Feature1Description
