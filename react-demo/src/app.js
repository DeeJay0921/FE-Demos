import PropTypes from 'prop-types'
import './app.less'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <h3>{this.props.name}</h3>
//       </div>
//
//     )
//   }
// }
// App.propTypes = {
//   name: PropTypes.string
// }
//
// App.defaultProps = {
//   name: 'Deejay'
// }


 // ref => DOM
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         {/*ref callback*/}
//         <input type="text" ref={(input) => this.testRef = input} />
//         <input type="button" onClick={this.focus.bind(this)} value="Click" />
//       </div>
//     )
//   }
//   focus() {
//     this.testRef.focus();
//   }
// }

// // ref ===> class Component
// class App extends React.Component {
//   render() {
//     return (
//       <TestComponent ref={(testComponent) => this.classCom = testComponent}></TestComponent>
//     )
//   }
//   componentDidMount () {
//     console.log(this.classCom.state)
//   }
// }
//
// class TestComponent extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'children Component'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <input type="text"/>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//
//     }
//   }
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

// class ListOfWords extends React.PureComponent {
//   render() {
//     return <div>{this.props.words.join(',')}</div>;
//   }
// }

// class WordAdder extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       words: ['marklar']
//     };
//   }
//
//   handleClick() {
//     this.setState( (prevState) => {
//       return {
//         words: [...prevState.words,'marklar'],// 数据不能突变
//       }
//     })
//     console.log(this.state)
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick.bind(this)}>Click</button>
//         <ListOfWords words={this.state.words} />
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello React</h1>
      </React.Fragment>
    )
  }
}

export default App