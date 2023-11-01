import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  function handelStyle(event){
    const color=event.target.name;
    setColor(color);
  }

  return (
    <div className='w-full min-h-screen' style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}} name='red'>Red</button>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}} name='green'>Green</button>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"blue"}} name='blue'>Blue</button>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"yellow"}} name='yellow'>Yellow</button>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"pink"}} name='pink'>Pink</button>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"purple"}} name='purple'>Purple</button>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor:"white"}} name='white'>White</button>
          <button onClick={handelStyle} className='outline-0 px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"black"}} name='black'>Black</button>
          </div>
      </div>

    </div>

    
  )
}

export default App
