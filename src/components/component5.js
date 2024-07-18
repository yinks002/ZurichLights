import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className="component5-container">
      <span className="component5-text thq-body-small">
        {props.step2Description}
      </span>
    </div>
  )
}

Component5.defaultProps = {
  step2Description:
    'industries, business and local residents can  participate in lighting decisions based on token-based voting system and  other systems as well.',
}

Component5.propTypes = {
  step2Description: PropTypes.string,
}

export default Component5
