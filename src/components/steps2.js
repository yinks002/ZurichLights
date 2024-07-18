import React from 'react'

import Component2 from './component2'
import Component3 from './component3'
import Component4 from './component4'
import Component5 from './component5'
import Component6 from './component6'
import Component7 from './component7'
import Component8 from './component8'
import Component9 from './component9'
import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Zurich light blockchain for sustainable Future.
            </h2>
            <p className="thq-body-large">
              {' '}
              Switzerland is engaged to shift towards sustainable future by
              implementing several renewable energy projects to ensure the 7th
              sustainability goal of having clean sustainable, affordable and
              reliable energy which is also aliens with zero-net emission
              policy.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <Component2></Component2>
              <Component3></Component3>
              <label className="steps2-text3 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <Component4></Component4>
              <Component5></Component5>
              <label className="steps2-text4 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <Component6></Component6>
              <Component7></Component7>
              <label className="steps2-text5 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <Component8></Component8>
              <Component9></Component9>
              <label className="steps2-text6 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps2
