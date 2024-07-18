import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <h1 className="text-text thq-heading-1">{props.heading1}</h1>
    </div>
  )
}

Text.defaultProps = {
  heading1: 'What is Zurich Light?',
}

Text.propTypes = {
  heading1: PropTypes.string,
}

export default Text
