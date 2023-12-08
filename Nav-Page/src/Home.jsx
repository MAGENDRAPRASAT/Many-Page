import { useEffect, useState,useRef } from "react";

// const Home = (props) => {
//    const [arr,setArr]=useState([1,2])


//  console.log("render")

//  useEffect(()=>{
//     console.log("useEffect")
//     setArr([2,3]);
//  },[])

//     return ( 
//    <>
  
//    <button onClick={()=>setArr(arr=>[...arr,`${arr.length}`])}></button>
//    {arr.map((elem,id)=>{
//     return <span key={id}>{elem}</span>
//    })}
//    </>
//      );
// }



function Home() {
   const [name, setName] = useState("")
   const previousName = useRef("")
 
   useEffect(() => {
      console.log(2);
      previousName.current = name
      //console.log(previousName.current);
   },[name])
 
   return (
     <>
       <input value={name} onChange={e => setName(e.target.value)} />
       <div>
         {console.log(1+" "+name)}
               {name + "  " + previousName.current}  <hr></hr>  
       </div>
     </>
   )
 }
 
export default Home;