// Component Basics
// --------------------

- One job EVERY React component must do: return some HTML to the DOM

- The HTML in the App isn't HTML, it's JSX, which is JS in another form. The build workflow created by create-react-app will transmogrify this into HTML in the DOM

- creating an element in App.js:

  class App extends Component {
    render() {
      return React.createElement('div*', null**,'derf***')
    }
  }

CreateElement takes infinite arguments, but at least 3 arguments
  *- could also be another component of yours!
  **- configuration, JS object, can add classNames (optional, default 'null')
  ***- Any amount of children, nested (can be multi, separated by commas), will be rendered inside element that is first argument


Render HTML inside the element in the first argument:

  return React.createElement(
    'div', 
    {className: 'exampleName'},
    React.createElement('h1', null, 'Now it renders as an h1 tag!')
  )


