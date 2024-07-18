import React from 'react'

import PropTypes from 'prop-types'

import './text1.css'

const Text1 = (props) => {
  return (
    <div className="text1-container">
      <p className="text1-text thq-body-large">{props.content1}</p>
    </div>
  )
}

Text1.defaultProps = {
  content1:
    "Zurich, a city renowned for its commitment to sustainability, presents an ideal canvas for innovative solutions addressing urban challenges. One such challenge is the energy consumption of public lighting systems. Zurich Lights explores the potential of integrating blockchain technology into Zurich's  lighting infrastructure to enhance sustainability, efficiency, and transparency.",
}

Text1.propTypes = {
  content1: PropTypes.string,
}

export default Text1
