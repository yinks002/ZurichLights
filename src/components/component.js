import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return <div className="app-component-container"></div>
}

AppComponent.defaultProps = {
  textareaPlaceholder: 'placeholder',
}

AppComponent.propTypes = {
  textareaPlaceholder: PropTypes.string,
}

export default AppComponent
