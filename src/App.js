import Item from './components/item.js';
import Card from './components/card.js';

const App = () => {
  return (
    <>
      <h1>My first app with React</h1>
      <ul>
          <Item className = "list-group-item list-group-item-action list-group-item-light">
           Item 1
          </Item>
          <Item className = "list-group-item list-group-item-action list-group-item-info">
            Item 2
          </Item>
          <Item className = "list-group-item list-group-item-action list-group-item-warning">
           Item 3
          </Item>
      </ul>
      <Card />
    </>
  )
}

export default App;