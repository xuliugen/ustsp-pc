import React from 'react'
import './formTitle.css'

const FormTitle = (props) => {
  return (
    <div styleName="title-wrapper">
      <span styleName="title">{props.title}</span>
    </div>
  )
}

export default FormTitle
