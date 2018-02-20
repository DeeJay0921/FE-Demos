const PropTypes  = require('prop-types')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <h3>{this.props.name}</h3>
    )
  }
}
App.propTypes = {
  name: PropTypes.string
}


export default App