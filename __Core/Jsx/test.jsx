/** @jsx h */
import { ZikoJsx } from './jsx-runtime';

// Define a component as a function
function MyComponent(props) {
  return (
    <div className="my-component">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function NumberList() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = [];
  
    for (let i = 0; i < numbers.length; i++) {
      listItems.push(<li key={i}>{numbers[i]}</li>);
    }
  
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
const element = (
    <section>
    <MyComponent title="Hello, World!" description="This is a custom JSX component without React." />
    <NumberList/>
    </section>
);

console.log(element);
