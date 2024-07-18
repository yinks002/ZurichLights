import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <h2 className="thq-heading-2">{props.step2Title}</h2>
    </div>
  )
}

Component4.defaultProps = {
  step2Title: 'Locals’ participation',
}

Component4.propTypes = {
  step2Title: PropTypes.string,
}

export default Component4
