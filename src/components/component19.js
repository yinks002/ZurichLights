import React from 'react'

import PropTypes from 'prop-types'

import './component19.css'

const Component19 = (props) => {
  return (
    <div className="component19-container">
      <p className="component19-text thq-body-large">{props.text3}</p>
    </div>
  )
}

Component19.defaultProps = {
  text3:
    'By using blockchain technology, specifically the Internet Computer Protocol (ICP), the report discusses how to enhance and maintain lighting in Zurich. The blockchain technology provides a decentralized system where smart contracts can make lighting automated, moreover, it will ensure energy optimization, reducing costs, and streamlining management. The main goals of the project to check feasibility, technical aspects, and potential benefits of utilizing lightings in Zurich through blockchain-based system. Furthermore, the project goals align with Zurich sustainability objects outlined in sustainable development goals showed in goals number 7 (Affordable and Clean Energy) and number 11 (Sustainable Cities and Communities).',
}

Component19.propTypes = {
  text3: PropTypes.string,
}

export default Component19
