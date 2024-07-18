import React from 'react'

import PropTypes from 'prop-types'

import './component8.css'

const Component8 = (props) => {
  return (
    <div className="component8-container">
      <h2 className="thq-heading-2">{props.step4Title}</h2>
    </div>
  )
}

Component8.defaultProps = {
  step4Title: 'Data Privacy',
}

Component8.propTypes = {
  step4Title: PropTypes.string,
}

export default Component8
