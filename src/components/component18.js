import React from 'react'

import PropTypes from 'prop-types'

import './component18.css'

const Component18 = (props) => {
  return (
    <div className="component18-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="component18-image thq-img-ratio-16-9"
      />
    </div>
  )
}

Component18.defaultProps = {
  imageAlt: 'image1Alt',
  imageSrc: '/microsoftteams-image%20(6)-400w.png',
}

Component18.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Component18
