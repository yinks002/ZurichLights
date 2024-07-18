import React from 'react'

import PropTypes from 'prop-types'

import './component11.css'

const Component11 = (props) => {
  return (
    <div className="component11-container">
      <h3 className="component11-text thq-heading-3">{props.location2}</h3>
    </div>
  )
}

Component11.defaultProps = {
  location2: 'HB',
}

Component11.propTypes = {
  location2: PropTypes.string,
}

export default Component11
