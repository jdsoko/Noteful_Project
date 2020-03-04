import React from 'react'
import './CircleButton.css'
import PropTypes from 'prop-types'

 function NavCircleButton(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavCircleButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavCircleButton.defaultProps ={
  tag: 'a',
}

NavCircleButton.propTypes = {
  className: PropTypes.string.isRequired,
  tag: PropTypes
    .oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  to: PropTypes.string,
  type: PropTypes.string,
  role: PropTypes.string
}

export default NavCircleButton;

