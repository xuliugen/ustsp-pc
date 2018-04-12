// @flow
import React from 'react'
import { Icon } from 'antd'
import './formTitle.css'

const FormTitle = (props: {
  title: string,
  hasAddBtn?: boolean,
  handleAddClick?: () => mixed
}) => {
  const { hasAddBtn = false, handleAddClick = null } = props
  return (
    <div styleName="title-container">
      <div styleName="title-wrapper">
        <span styleName="title">{props.title}</span>
      </div>
      {hasAddBtn &&
        <button styleName="add-btn" onClick={handleAddClick}><Icon type="plus" /> 添加</button>
      }
    </div>
  )
}

export default FormTitle
