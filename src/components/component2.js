import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <h2 className="thq-heading-2">{props.step1Title}</h2>
    </div>
  )
}

Component2.defaultProps = {
  step1Title: 'Autonomous Lighting Management',
}

Component2.propTypes = {
  step1Title: PropTypes.string,
}

export default Component2
