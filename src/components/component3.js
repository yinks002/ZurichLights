import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <span className="component3-text thq-body-small">
        {props.step1Description}
      </span>
    </div>
  )
}

Component3.defaultProps = {
  step1Description:
    'With the use of smart contract that  can be set to manipulate the light based on various factors including the  time of the day, weather conditions, traffic patterns, specific events  happening in Zurich',
}

Component3.propTypes = {
  step1Description: PropTypes.string,
}

export default Component3
