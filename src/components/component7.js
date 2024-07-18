import React from 'react'

import PropTypes from 'prop-types'

import './component7.css'

const Component7 = (props) => {
  return (
    <div className="component7-container">
      <span className="component7-text thq-body-small">
        {props.step3Description}
      </span>
    </div>
  )
}

Component7.defaultProps = {
  step3Description:
    'Using ICP can ensure that consumed energy is  ideal through data gathered about weather, from light sensors, traffic  network. Moreover, Smart contracts based on the data collected can  adjust the levels of light in Zurich',
}

Component7.propTypes = {
  step3Description: PropTypes.string,
}

export default Component7
