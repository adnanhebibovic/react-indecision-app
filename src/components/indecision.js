import React from 'react'

import Header from './header'
import Action from './action'
import Options from './options'
import Modal from './modal'

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [],
      option: undefined
    }

    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRemoveOption = this.handleRemoveOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    const options = localStorage.getItem('options')
    if (options) {
      try {
        this.setState({options: JSON.parse(options)})
      } catch (error) {
        //do nothing
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.length !== this.state.options.length) {
      const options = JSON.stringify(this.state.options)
      localStorage.setItem('options', options)
    }
  }

  handleRemoveAll() {
    this.setState({options: []})
  }

  handleClose() {
    this.setState({option: undefined})
  }

  handleAddOption(option) {
    if (!option) {
      return "You must provide an option!"
    }

    if (this.state.options.find((o) => o == option)) {
      return "An option already exists!"
    }
    
    this.state.options.push(option)

    this.setState({
      options: this.state.options
    })
  }

  handleRemoveOption(option) {
    if (option) {
      const filtered = this.state.options.filter((o) => o != option)
      this.setState({options: filtered})
    }
  }

  handlePick() {
    var number = Math.floor(Math.random() * this.state.options.length)
    this.setState({option: this.state.options[number]})
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}             
            handlePick={this.handlePick}></Action>
          <Modal 
            option={this.state.option}
            handleClose={this.handleClose}></Modal>
          <Options 
            options={this.state.options} 
            handleRemoveAll={this.handleRemoveAll} 
            handleAddOption={this.handleAddOption} 
            handleRemoveOption={this.handleRemoveOption}></Options>
        </div>
      </div>
    )
  }
}