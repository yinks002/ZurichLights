import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Feature1Title from './feature1-title'
import Feature2Title from './feature2-title'
import Feature3Title from './feature3-title'
import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container1 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal"
          >
            <div className="features24-divider-container">
              {activeTab === 0 && <div className="features24-container2"></div>}
            </div>
            <div className="features24-content">
              <Feature1Title></Feature1Title>
              {activeTab === 1 && (
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              )}
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 1 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <Feature2Title></Feature2Title>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 2 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <Feature3Title></Feature3Title>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1531132204304-242e7c5309f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt:
    'Image showing improved infrastructure management with blockchain technology',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1514355315815-2b64b0216b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Other renewables such as Solar and wind energy witnessed a significant increase through the last years, however, both types of energy still represent an insignificant portion of the energy mix in Switzerland.',
  feature2Title: 'Cost Reduction',
  feature2Description:
    'Despite the fact that the country tries to shift away from nuclear energy still nuclear energy are still considered as a reliable source of energy.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1542280688-542f6ae7733b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'with the abundance of water resources in Switzerland. The country relies dominantly on hydropower as a clean and sustainable, renewable source of energy.',
  feature2ImgAlt:
    'Image illustrating cost reduction through blockchain-based lighting control',
  feature1ImgAlt:
    'Image depicting enhanced energy efficiency through blockchain technology',
}

Features24.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
}

export default Features24
