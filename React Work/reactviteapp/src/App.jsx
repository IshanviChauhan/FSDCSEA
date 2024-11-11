import React from 'react'
import Student from './Student'

function App() {
  let a = 12;
  const mystyle1 = {
    backgroundColor: "lightblue",
    color: "green"
  }
  const mystyle2 = {
    backgroundColor: "lightpink",
    color: "blue"
  }
  return (
    <div style={mystyle1}>ABES Engineering College
      <div style={mystyle2}>{a}</div>
      <div style={mystyle2}>
        <Student college="ABES ENGINEERING COLLEGE" name="Ishanvi" roll="77" branch="CSE" section="A"/>
      </div>
    </div>
  )
}

export default App