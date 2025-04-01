import React from 'react'
import Register from './Components/Register'
import View from './Components/View'
import Update from './Components/Update'
import Delete from './Components/Delete'

const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'greenyellow'}}>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App