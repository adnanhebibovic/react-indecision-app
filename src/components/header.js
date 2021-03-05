import React from 'react'

const Header = function(props) {
    return (
      <div className="header">
        <div className="container">
          <h1 className="header__title">{props.title}</h1>
          <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
      </div>
    )
}

Header.defaultProps = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer!'
}

export default Header;