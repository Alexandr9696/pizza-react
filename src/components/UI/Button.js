import React from 'react'

const Button = (props) => {

  const cls = ['button'];

  if (props.className) {
    cls.push(props.className)
  }

  if (props.outline) {
    cls.push('button--outline')
  }

    return (
      <button
      onClick={props.onClick}
      className={cls.join(' ')}
      >
        {props.children}
      </button>
    )
}

export default Button