import React, { useEffect, useState } from 'react'
import Square from './Square'
export default function Main() {
  const [arr,setArr] = useState(Array(9).fill(null))
  const [playerX,setPlayerX] = useState(true)
  function winner(arrayy){
    for(let [a,b,c] of arrayy){
      if(arr[a] && arr[a]===arr[b] && arr[b]===arr[c]){
        alert(`Winner is ${arr[a]}`)
        return
      }
    }
   
  }
  useEffect(()=>{
    winner([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])
  },[arr])
  function set(index){
   
    const arraynew= [...arr]
    arraynew[index] = playerX?'X'
    :0
    setArr(arraynew)
    setPlayerX(!playerX)
  }
  return (
    <div>

      <div className='flex h-[100px] w-[300px] justify-evenly' >
                <Square value={arr[0]} onClick={()=>set(0)} />
                <Square value={arr[1]} onClick={()=>set(1)}  />
                <Square value={arr[2]} onClick={()=>set(2)} />
      </div>
      <div className='flex h-[100px] w-[300px]'>
                <Square value={arr[3]} onClick={()=>set(3)} />
                <Square value={arr[4]} onClick={()=>set(4)} />
                <Square value={arr[5]} onClick={()=>set(5)} />
      </div>
      <div className='flex h-[100px] w-[300px]'>
                <Square value={arr[6]} onClick={()=>set(6)} />
                <Square value={arr[7]} onClick={()=>set(7)} />
                <Square value={arr[8]} onClick={()=>set(8)} />
      </div>
    </div>
  )
}

