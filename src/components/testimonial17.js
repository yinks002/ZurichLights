import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    'The blockchain technology has proven to be a game-changer in our efforts to create a more sustainable and efficient urban environment. The street lighting control system has exceeded our expectations.',
  author4Alt: 'Image of Thomas Wagner',
  author2Src:
    'https://images.unsplash.com/photo-1554727242-741c14fa561c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Client Testimonials',
  author2Name: 'Markus Müller',
  author1Name: 'Sophie Johnson',
  author4Position: 'Energy Efficiency Specialist',
  review2:
    "The decentralized control of street lighting through blockchain has streamlined our operations and improved the overall management of lighting infrastructure. It's a remarkable advancement in urban technology.",
  author4Name: 'Thomas Wagner',
  author1Alt: 'Image of Sophie Johnson',
  author2Position: 'City Planner, City of Zurich',
  author2Alt: 'Image of Markus Müller',
  review4:
    "I have been impressed by the tangible benefits that the blockchain technology has brought to street lighting management in Zurich. The system's transparency and efficiency are unmatched, making it a model for other cities to follow.",
  author3Src:
    'https://images.unsplash.com/photo-1599043221276-e241fb7458b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Anna Schmidt',
  review3:
    'As an energy efficiency specialist, I can confidently say that the blockchain-based system for street lighting control is a breakthrough innovation. It has set a new standard for energy-efficient urban lighting solutions.',
  content1:
    'Implementing the blockchain-based lighting control system has revolutionized how we manage street lighting. Our energy consumption has significantly decreased, and we are thrilled with the cost savings it has brought us.',
  author1Position: 'CEO, Green Energy Solutions',
  author1Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTEzODcwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Anna Schmidt',
  author3Position: 'Head of Infrastructure, Zurich Municipality',
}

Testimonial17.propTypes = {
  author4Src: PropTypes.string,
  review1: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  heading1: PropTypes.string,
  author2Name: PropTypes.string,
  author1Name: PropTypes.string,
  author4Position: PropTypes.string,
  review2: PropTypes.string,
  author4Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author2Alt: PropTypes.string,
  review4: PropTypes.string,
  author3Src: PropTypes.string,
  author3Name: PropTypes.string,
  review3: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  author1Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.string,
}

export default Testimonial17
