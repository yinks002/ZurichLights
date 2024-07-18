import React from 'react'

import PropTypes from 'prop-types'

import './component16.css'

const Component16 = (props) => {
  return (
    <div className="component16-container">
      <img
        alt={props.imageAlt2}
        src={props.imageSrc2}
        className="component16-image thq-img-ratio-16-9"
      />
    </div>
  )
}

Component16.defaultProps = {
  imageSrc2: '/microsoftteams-image%20(6)-400h.png',
  imageAlt2: 'image1Alt',
}

Component16.propTypes = {
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Component16
