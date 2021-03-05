import React from 'react'

export default Option = function(props) {
    return (
      <div className="option">
        <p key={props.text}>
          {props.text}  
        </p>
        <button 
            className="button button--link"
            onClick={() => { props.handleRemoveOption(props.text) }}
          >
            Remove
        </button>
      </div>
    )
  }

