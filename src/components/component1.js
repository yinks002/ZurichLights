import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <h2 className="thq-heading-2">{props.feature1Title}</h2>
    </div>
  )
}

Component1.defaultProps = {
  feature1Title: 'Key features in the last 20 years',
  text: 'Key features in the last 20 years?',
}

Component1.propTypes = {
  feature1Title: PropTypes.string,
  text: PropTypes.string,
}

export default Component1
