import { useContext } from "react";
import {UserContext} from "../AppContext";

function Child1Context() {
  const receiveContext = useContext(UserContext)
  return (
    <div>
      <h3>Child1Context</h3>
      Name : {receiveContext.name} <br />
    </div>
  );
}

export default Child1Context