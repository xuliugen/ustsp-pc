import React from 'react'
import FormTitle from '../form-title/FormTitle'
import './infoExp.css'

export default class InfoExp extends React.Component {
  state = {
    selectedItem: null,
    items: [],
    createDialogVisible: false,
    updateDialogVisible: false
  }

  constructor(props) {
    super(props)
    this.createItem = this.createItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setSelectedItem = this.setSelectedItem.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.options.items
    })
  }

  setVisible(type, visible) {
    switch (type) {
      case 'create':
        this.setState({
          createDialogVisible: visible
        })
        break
      case 'update':
        this.setState({
          updateDialogVisible: visible
        })
        break
    }
  }

  setItems(items) {
    this.setItems({
      items
    })
  }

  createItem(item) {
    this.setState((prev) => ({
      items: prev.items.concat(item)
    }))
  }

  updateItem(item) {
    const idx = this.state.items.findIndex(item => item.id === this.state.selectedItem.id)
    let newItems = this.state.items
    newItems.splice(idx, 1, item)
    this.setState(pre => ({
      expItems: newItems
    }))
    this.setSelectedItem(null)
  }

  deleteItem({ id }) {
    const idx = this.state.items.findIndex(exp => exp.id === id)
    let newItems = this.state.items
    newItems.splice(idx, 1)
    this.setState({
      items: newItems
    })
  }

  setSelectedItem(item) {
    this.setState({
      selectedItem: item
    })
  }

  render() {
    const { options, ItemComp, FormComp, CreateDialog, UpdateDialog } = this.props
    const { title = '', editable = false } = options

    const ItemListComp = this.state.items.map((item) =>
      <ItemComp
        key={item.id}
        editable={editable}
        {...item}
        setVisible={this.setVisible.bind(this, 'update')}
        setSelectedItem={this.setSelectedItem}
        deleteItem={this.deleteItem}
      />
    )

    return (
      <div styleName="root">
        <FormTitle title={title} hasAddBtn={editable} handleAddClick={this.setVisible.bind(this, 'create', true)} />
        <div styleName="content">
          {ItemListComp}
        </div>
        {editable &&
          <CreateDialog
            title={title}
            visible={this.state.createDialogVisible}
            setVisible={this.setVisible.bind(this, 'create')}
            createItem={this.createItem} >
            {FormComp}
          </CreateDialog>
        }
        {editable &&
          <UpdateDialog
            title={title}
            item={this.state.selectedItem}
            visible={this.state.updateDialogVisible}
            setVisible={this.setVisible.bind(this, 'update')}
            updateItem={this.updateItem} >
            {FormComp}
          </UpdateDialog>
        }
      </div>
    )
  }
}
