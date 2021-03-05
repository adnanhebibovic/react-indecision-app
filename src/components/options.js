import React from 'react'

import Option from './option'

export default class Options extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = { error : '' }
  
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleSubmit(e) {
      e.preventDefault()
  
      const option = e.target.elements.option.value
      const error = this.props.handleAddOption(option.trim())
  
      this.setState({ error: error })
      if (!error) {
        e.target.elements.option.value = ''
      }
    }
  
    render() {
      return (
        <div className="options">

          <div className="options-header">
            <h3 className="options-header__title">
              {(this.props.options && this.props.options.length > 0) 
                  ? 'Here are your options' 
                  : 'No options available'}
            </h3>
            <button 
              className="button button--link"
              disabled={this.props.options.length == 0} 
              onClick={this.props.handleRemoveAll}
            >
              Remove all
            </button>
          </div>

          <div className="options__message">
            {this.props.options.length == 0 && <p>Please add options to get started</p>}
          </div>

          {
            this.props.options.map((option) => 
              <Option 
                key={option} 
                text={option} 
                handleRemoveOption={this.props.handleRemoveOption}></Option>
            )
          }

          {this.state.error && <p className="options__error">{this.state.error}</p>}

          <form className="options__form" onSubmit={this.handleSubmit}>  
            <input className="options__input" type="text" name="option" autoFocus/>
            <button className="button" type="submit">Add option</button>
          </form>
        </div>
      )
    }
  }