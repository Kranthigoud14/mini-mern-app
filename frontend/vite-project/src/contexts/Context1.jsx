import { useState,createContext } from 'react'
//import { counterContextObj1 as CounterContextObj1 } from './Counter1Context'

export const counterContextObj1 = createContext()

function Context1Provider({ children }) {
  const [counter, setCounter] = useState(10)
  const addCounter = () => {
    setCounter((prev) => prev + 1)
  }
  const subCounter=()=>{
    setCounter((prev)=>prev-1)
  }

  return (
    <counterContextObj1.Provider value={{ counter, addCounter, subCounter }}>
      {children}
    </counterContextObj1.Provider>
  )
}

export default Context1Provider
