import React from 'react'

import PropTypes from 'prop-types'

import './component9.css'

const Component9 = (props) => {
  return (
    <div className="component9-container">
      <span className="component9-text thq-body-small">
        {props.step4Description}
      </span>
    </div>
  )
}

Component9.defaultProps = {
  step4Description:
    'the Decentralized structure of ICP can maintain the privacy  of data, in addition to data protection by preventing centralized entities to  have full control.',
}

Component9.propTypes = {
  step4Description: PropTypes.string,
}

export default Component9
