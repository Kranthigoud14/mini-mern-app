import { useContext } from 'react'
import { counterContextObj1 } from '../contexts/Context1'
import { useCounterStore } from '../stores/CounterStore'
function Home() {
  // Zustand store
  const { newCounter, incrementCounter, decrementCounter } = useCounterStore()

  // React Context
  const { counter, addCounter: add1, subCounter: sub1 } = useContext(counterContextObj1)


  
  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      {/* Context Counter */}
      {/* <div className="p-6 border-2 rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4">EditCounter-1</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Counter: {counter}</h1>
        <button onClick={add1} className="bg-green-700 p-3 mr-4 rounded">+</button>
        <button onClick={sub1} className="bg-red-700 p-3 rounded">-</button> */}
      {/* </div> */}

      {/* Zustand Counter */}
      <div className="p-6 border-2 rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4">Increment Counter</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Counter: {newCounter}</h1>
        <button onClick={incrementCounter} className="bg-green-700 p-3 mr-4 rounded">+</button>
        <button onClick={decrementCounter} className="bg-red-700 p-3 rounded">-</button>
      </div>

      {/* Reuse Context Counter */}
      <div className="p-6 border-2 rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4">Increment counter</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Counter: {newCounter}</h1>
        <button onClick={incrementCounter} className="bg-green-700 p-3 mr-4 rounded">+</button>
        <button onClick={decrementCounter} className="bg-red-700 p-3 rounded">-</button>
      </div>

      {/* <div className="p-6 border-2 rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4">EditCounter-4</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Counter: {counter}</h1>
        <button onClick={add1} className="bg-green-700 p-3 mr-4 rounded">+</button>
        <button onClick={sub1} className="bg-red-700 p-3 rounded">-</button>
      </div> */}
    </div>
  )
}

export default Home