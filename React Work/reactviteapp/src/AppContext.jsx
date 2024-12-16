// import React from 'react'
import {createContext } from "react";
import Child1Context from './contextComponent/Child1Context.jsx'
import Child2Context from './contextComponent/Child2Context.jsx'
import Child3Context from './contextComponent/Child3Context.jsx'

const UserContext = createContext()

function AppContext() {
    const data = {
        name: 'Ishanvi',
        branch: 'CSE',
        section: 'A',
    }

    return (
        <UserContext.Provider value={data}>
          <h3>{`Hello ${data.name}!`}</h3>
          <Child1Context />
          <Child2Context />
          <Child3Context />
        </UserContext.Provider>
    );    
}
export{
    UserContext
}


export default AppContext