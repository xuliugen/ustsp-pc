import React from 'react'
import { Icon, Modal, message, Input } from 'antd'
import './friendCard.css'
// import ImgAvatar from 'src/assets/defaultAvatar.svg'
import { userTypeNumToStr } from 'src/common/formatter'
import { ContactsApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const confirm = Modal.confirm

@inject('userStore')
@observer
export default class FriendCard extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      notes: ''
    }
  }

  handleDelete = () => {
    confirm({
      title: '确定要删除该好友吗？',
      okText: '是的',
      okType: 'danger',
      cancelText: '取消',
      onOk: async () => {
        try {
          await ContactsApi.deleteFriends(this.props.userStore.user.id, this.props.info.userInfo.id)
          message.success('删除好友成功')
          this.props.getFriendsList()
        } catch (error) {
          console.log(error)
        }
      }
    })
  }

  handleModal(type) {
    this.setState({
      visible: type
    })
  }

  handleOk = async () => {
    try {
      await ContactsApi.setNotes(this.props.userStore.user.id, this.props.info.userInfo.id, this.state.notes)
      message.success('修改备注成功')
      this.setState({
        visible: false
      })
      this.props.getFriendsList()
    } catch (error) {
      console.log(error)
    }
  }

  setNotes = (e) => {
    this.setState({
      notes: e.target.value
    })
  }

  setElements(type) {
    switch (type) {
      case 'my-friends':
        return {
          note: '备注',
          icons: true
        }
      case 'second-degree':
        return {
          note: '来源',
          icons: false
        }
    }
  }

  render() {
    const { userInfo } = this.props.info
    let elements = this.setElements(this.props.type)
    let userType = userTypeNumToStr(userInfo.userType)
    return (
      <div styleName="root">
        <div styleName="avatar-wrapper"><Link to={`/${userType}/${userInfo.id}`}><img styleName="avatar" src={userInfo.avatar} /></Link></div>
        <div styleName="friend-detail">
          <div styleName="name">{this.props.info.username}</div>
          <div styleName="location">{userInfo.location}</div>
          <div styleName="notes">{elements.note}：{userInfo.realName}</div>
        </div>
        {elements.icons ? (
          <div styleName="icons">
            <Icon type="form" styleName="edit" onClick={this.handleModal.bind(this, true)} />
            <Icon type="delete" styleName="delete" onClick={this.handleDelete} />
          </div>
        ) : null}
        <Modal visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleModal.bind(this, false)} >
          <div>修改备注：</div>
          <Input style={{ marginTop: '10px' }} value={this.state.notes} onChange={this.setNotes} />
        </Modal>
      </div>
    )
  }
}
