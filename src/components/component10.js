import React from 'react'

import PropTypes from 'prop-types'

import './component10.css'

const Component10 = (props) => {
  return (
    <div className="component10-container">
      <h3 className="component10-text thq-heading-3">{props.location1}</h3>
    </div>
  )
}

Component10.defaultProps = {
  location1: 'Alstetten',
}

Component10.propTypes = {
  location1: PropTypes.string,
}

export default Component10
