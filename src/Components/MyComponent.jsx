import { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // componentDidMount and componentDidUpdate combined with useEffect
  useEffect(() => {
    console.log(
      "2.) componentDidMount / componentDidUpdate: Component rendered/updated"
    );

    // componentWillUnmount
    return () => {
      console.log("3.) componentWillUnmount: Cleanup before unmount");
    };
  }, [count]); // dependency array ensures this effect runs when `count` changes

  console.log("1.) Render: Component is rendering");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
