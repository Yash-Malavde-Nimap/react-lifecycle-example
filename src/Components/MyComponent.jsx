import { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(
      "2.) componentDidMount / componentDidUpdate: Component rendered/updated"
    );

    return () => {
      console.log("3.) componentWillUnmount: Cleanup before unmount");
    };
  }, [count]);

  console.log("1.) Render: Component is rendering");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
