import { useContext } from "react";
import {UserContext} from "../AppContext";

function Child3Context() {
  const receiveContext = useContext(UserContext)
  return (
    <div>
      <h3>Child3Context</h3>
      Name : {receiveContext.name} <br />
    </div>
  );
}

export default Child3Context