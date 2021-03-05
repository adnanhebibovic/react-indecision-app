class Toggle extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            toggle: true 
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggle}>{this.state.toggle ? 'Show text' : 'Hide text'}</button>
                {!this.state.toggle && <p><label>Hey, this is some text that you can now see!</label></p>}
            </div>
        )
    }
}

ReactDOM.render(<Toggle></Toggle>, document.getElementById('root'))