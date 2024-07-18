import React from 'react'

import PropTypes from 'prop-types'

import './feature2-title.css'

const Feature2Title = (props) => {
  return (
    <div className="feature2-title-container">
      <h2 className="thq-heading-2">{props.feature2Title}</h2>
    </div>
  )
}

Feature2Title.defaultProps = {
  feature2Title: 'Nuclear Energy',
}

Feature2Title.propTypes = {
  feature2Title: PropTypes.string,
}

export default Feature2Title
