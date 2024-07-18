import React from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container1">
              <div className="cta26-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  action1: 'Get the full report now',
  heading1: 'Ready to automate your lighteneing in zurich?',
  content1:
    'To understand how Zurich lights project would be more beneficial for brighter and more sustainable future we need to shed some light on the electricity demand, supply and compare the electricity generated from renewable energy and from fossil fuels as well in Switzerland.',
}

CTA26.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default CTA26
