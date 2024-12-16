import { useContext } from "react";
import {UserContext} from "../AppContext";

function Child2Context() {
  const receiveContext = useContext(UserContext)
  return (
    <div>
      <h3>Child2Context</h3>
      Name : {receiveContext.name} <br />
    </div>
  );
}

export default Child2Context