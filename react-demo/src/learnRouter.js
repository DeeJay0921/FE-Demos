import { BrowserRouter } from 'react-router-dom'

import App from './app'

const roomDom = document.querySelector('#root')

// ReactDom.render(
//   <BrowserRouter>
//     <App></App>
//   </BrowserRouter>
// ,document.querySelector('#root'))

class TestRouter extends React.Component {
  constructor () {
    super()
  }
  render() {
    return (
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    )
  }
}

export default TestRouter
