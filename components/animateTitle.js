// @flow
import React from 'react'

type Props = {
  title: string,
  className?: string
}

class AnimateTitle extends React.Component {
  constructor(props: Props) {
    super(props)
  }

  render () {
    const {title, className} = this.props
    return (
      <a className={`link link--mallki ${className}`} href="#">
        {title}
        <span data-letters={title}></span>
        <span data-letters={title}></span>
      </a>
    )
  }
}

export default AnimateTitle