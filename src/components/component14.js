import React from 'react'

import PropTypes from 'prop-types'

import Component19 from './component19'
import './component14.css'

const Component14 = (props) => {
  return (
    <div className="component14-container thq-section-padding">
      <div className="component14-max-width thq-section-max-width">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="component14-image thq-img-ratio-16-9"
        />
        <div className="component14-content thq-flex-row"></div>
        <div className="component14-content1 thq-flex-row">
          <div className="component14-container1">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="component14-image1 thq-img-ratio-16-9"
            />
            <div className="component14-container2">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="component14-image2 thq-img-ratio-16-9"
              />
            </div>
            <div className="component14-container3"></div>
            <div className="component14-container4">
              <div className="component14-container5"></div>
            </div>
          </div>
          <div className="component14-container6">
            <Component19></Component19>
            <div className="component14-container7"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Component14.defaultProps = {
  imageAlt1: 'image2Alt',
  imageSrc3: '9e364c86-6bc3-4854-ad46-d6e41460f911',
  text5: 'Get directions',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  linkText1: '',
  text2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  imageAlt3: 'image',
  imageSrc2: '/microsoftteams-image%20(7)-400w.png',
  text4: 'Get directions',
  text: 'Locations',
  imageAlt: 'image1Alt',
  imageSrc1: '/microsoftteams-image%20(5)-200h.png',
  linkText: '',
  imageAlt2: 'image1Alt',
  imageSrc: '/microsoftteams-image%20(6)-400w.png',
}

Component14.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc3: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  linkText1: PropTypes.string,
  text2: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  linkText: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Component14
