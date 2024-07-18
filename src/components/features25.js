import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Feature1Title1 from './feature1-title1'
import Feature1Description from './feature1-description'
import Feature2Title1 from './feature2-title1'
import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <Feature1Title1></Feature1Title1>
              <Feature1Description></Feature1Description>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <Feature2Title1></Feature2Title1>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2Description:
    ' In the last 5 years the world energy was effected because of Covid-19, then the Ukrainian and Russian war which highlighted the importance to shift towards new resources of energy including renewables such as green hydrogen, wind, and solar to maintain the energy supply.',
  feature3Title: 'Improved Infrastructure Management',
  feature3ImgAlt:
    'Image showing advanced infrastructure management in street lighting',
  feature2ImgAlt:
    'Image illustrating cost savings in street lighting management',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1583418855574-dcb771a0c46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1609604840892-7c731d545780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Image depicting energy-efficient street lighting',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1526106154178-49847e3af9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'The blockchain-based system offers a transparent and secure way to manage lighting infrastructure, leading to better maintenance and overall performance.',
}

Features25.propTypes = {
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features25
