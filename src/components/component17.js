import React from 'react'

import PropTypes from 'prop-types'

import Component16 from './component16'
import './component17.css'

const Component17 = (props) => {
  return (
    <div className={`component17-container ${props.rootClassName} `}>
      <Component16 imageSrc2="/microsoftteams-image%20(7)-400h.png"></Component16>
    </div>
  )
}

Component17.defaultProps = {
  rootClassName: '',
}

Component17.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component17
