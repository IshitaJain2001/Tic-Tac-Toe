// import React, { useEffect, useState } from 'react'
// import Square from './Square'
// export default function Main() {
//   const [arr,setArr] = useState(Array(9).fill(null))
//   const [playerX,setPlayerX] = useState(true)
//   function winner(arrayy){
//     for(let [a,b,c] of arrayy){
//       if(arr[a] && arr[a]===arr[b] && arr[b]===arr[c]){
//         alert(`Winner is ${arr[a]}`)
//         return
//       }
//     }
   
//   }
//   useEffect(()=>{
//     winner([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])
//   },[arr])
//   function set(index){
   
//     const arraynew= [...arr]
//     arraynew[index] = playerX?'X'
//     :0
//     setArr(arraynew)
//     setPlayerX(!playerX)
//   }
//   return (
//     <div>

//       <div className='flex h-[100px] w-[300px] justify-evenly' >
//                 <Square value={arr[0]} onClick={()=>set(0)} />
//                 <Square value={arr[1]} onClick={()=>set(1)}  />
//                 <Square value={arr[2]} onClick={()=>set(2)} />
//       </div>
//       <div className='flex h-[100px] w-[300px]'>
//                 <Square value={arr[3]} onClick={()=>set(3)} />
//                 <Square value={arr[4]} onClick={()=>set(4)} />
//                 <Square value={arr[5]} onClick={()=>set(5)} />
//       </div>
//       <div className='flex h-[100px] w-[300px]'>
//                 <Square value={arr[6]} onClick={()=>set(6)} />
//                 <Square value={arr[7]} onClick={()=>set(7)} />
//                 <Square value={arr[8]} onClick={()=>set(8)} />
//       </div>
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react'
import Square from './Square'
export default function  Main() {
    const [arr,setArr] = useState(Array(9).fill(null))
    const [isX,setisX] =useState(true)
const [winner,setWinner] =useState(null)
const [countX,setCountX] = useState(0)
const [countY,setCountY] = useState(0)
function initialise(){
 setArr(Array(9).fill(null))
 setisX(true)
 setWinner(null)
 
}

function beginagain(){
    setArr(Array(9).fill(null))
    setisX(true)
    setWinner(null)  
    setCountX(0)
    setCountY(0)
}
    function setarr(index){
let newarr=[...arr]
newarr[index] = isX?"X":'0'
setArr(newarr)
    setisX(!isX)

    }

    function whowins(combo){
for (const [a,b,c] of combo) {
    if(arr[a]&&arr[a]===arr[b] && arr[b]===arr[c]){
      
        setWinner(arr[a])
        if(arr[a]==='X'){
            setCountX((prev)=>prev+1)
        }
        else if(arr[a]==='0'){
            setCountY((prev)=>prev+1)
        }
        break;
    }
}
    }


    useEffect(()=>{
        if(winner===null) {

      
        whowins([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])
        }
    },[arr])
  return (
    <div>
    <div style={ {display:"flex",justifyContent:"space-evenly" ,width:"300px" ,height:"100px" } } > 
               <Square value={arr[0]} onClick={()=>setarr(0)} />
               <Square  value={arr[1]} onClick={()=>setarr(1)}/>
               <Square value={arr[2]} onClick={()=>setarr(2)}/>
    
    </div>
    <div  style={ {display:"flex",justifyContent:"space-evenly" ,width:"300px" ,height:"100px"} }>
              <Square value={arr[3]} onClick={()=>setarr(3)}/>
              <Square value={arr[4]} onClick={()=>setarr(4)} />
              <Square value={arr[5]} onClick={()=>setarr(5)} />
    </div>
    <div style={ {display:"flex",justifyContent:"space-evenly" ,width:"300px" ,height:"100px" } }>
                  <Square value={arr[6]} onClick={()=>setarr(6)} />
                  <Square value={arr[7]} onClick={()=>setarr(7)} />
                  <Square value={arr[8]} onClick={()=>setarr(8)} />
    </div>
<p>winner is: {winner}</p>
<p>Matches won by X :{countX}</p>
<p>Matches won by 0 :{countY}</p>
    <button onClick={initialise} className='border border-gray-500' >Next Match</button>
    <button onClick={beginagain} className='border border-gray-500'>Fresh Match</button>
    </div>
  )
}


