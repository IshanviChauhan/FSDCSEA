import React, {useState} from "react";

function StudentState() {
  const [count, setCount] = useState(1);
  // return <div>{count}</div>;

  function increment(){
    // alert("Hi");
    setCount(count + 1);
  }
  function decrement(){
    setCount(count - 1);
  }
    return(
      <div>
        <div><h2>{count}</h2>
        <br></br>
        </div>
        <div>
          <button onClick={increment}>Do Increment</button>
          <button onClick={decrement}>Do Decrement</button>
        </div>
      </div>
    )
}

export default StudentState;
