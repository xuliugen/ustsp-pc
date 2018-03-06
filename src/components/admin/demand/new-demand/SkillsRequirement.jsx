import { Tag, Input, Tooltip, Icon, Select } from 'antd'
import React from 'react'
import './skillsRequirement.css'
import { skill } from 'src/common/dataset'

const Option = Select.Option

const children = []
for (let i = 0; i < skill.length; i++) {
  children.push(<Option key={i.toString(36) + i}>{skill[i]}</Option>)
}

export default class EditableTagGroup extends React.Component {
  state = {
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: ''
  }

  componentDidMount() {
    this.setState({
      tags: this.props.skills
    })
  }

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag)
    console.log(tags)
    this.setState({ tags })
    this.props.setSkills(tags)
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus())
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleInputConfirm = () => {
    const state = this.state
    const inputValue = state.inputValue
    let tags = state.tags
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue]
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ''
    })
    this.props.setSkills(tags)
  }

  saveInputRef = input => (this.input = input)

  render() {
    const { tags, inputVisible, inputValue } = this.state
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20
          const tagElem = (
            <Tag key={tag} closable="true" afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          )
          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: '#fff', borderStyle: 'dashed' }}
          >
            <Icon type="plus" /> 增加要求
          </Tag>
        )}
        <Select
          mode="tags"
          size="small"
          placeholder="Please select"
          style={{ width: '100%' }}
        >
          {children}
        </Select>
      </div>
    )
  }
}
