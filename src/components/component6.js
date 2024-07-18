import React from 'react'

import PropTypes from 'prop-types'

import './component6.css'

const Component6 = (props) => {
  return (
    <div className="component6-container">
      <h2 className="thq-heading-2">{props.step3Title}</h2>
    </div>
  )
}

Component6.defaultProps = {
  step3Title: 'Energy Optimization',
}

Component6.propTypes = {
  step3Title: PropTypes.string,
}

export default Component6
