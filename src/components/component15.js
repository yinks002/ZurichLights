import React from 'react'

import PropTypes from 'prop-types'

import './component15.css'

const Component15 = (props) => {
  return (
    <div className="component15-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="component15-image thq-img-ratio-16-9"
      />
    </div>
  )
}

Component15.defaultProps = {
  imageAlt: 'image1Alt',
  imageSrc: '/microsoftteams-image%20(6)-400w.png',
}

Component15.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Component15
