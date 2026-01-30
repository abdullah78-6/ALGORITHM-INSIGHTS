import { createContext, useState } from "react";
import {  toast } from 'react-toastify';
export const Helper=createContext();
export const Gives=({children})=>{
const [linearsearch,setlinearsearch]=useState(false);
const [binarysearch,setbinarysearch]=useState(false);
const [arraysize,setarraysize]=useState();
const [arrayselemnts,setarrayelements]=useState([]);
const [key,setsearchelement]=useState();
const[result,setresult]=useState("");
const[activeindex,setactiveindex]=useState(-1);
const [foundindex,setfoundindex]=useState(-1);
const [options,setoptions]=useState({
     plugins: {
      legend: {
        labels: {
          color: "blue"
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: "blue"
        },
        ticks: {
          color: "orange",
          display:false
          
        },
        beginAtZero: true,
      },
    },
  

})
   
function RandomArray(name){
   if(arraysize>40){
        toast.error("NOTE: The value of size varies from 1 to 40 ",{theme:"colored"});
        return ;
        
    }
    if(name==="binarysearch"){
        const newarray=[];
        for(let i=1;i<=arraysize;i++){
        newarray.push(i);
     }
       toast.success("ARRAY CREATED FOR BINARY SEARCH ",{theme:"colored"});
       setarrayelements(newarray);
   }
    if(name==="linearsearch"){
        // unsorted order 
        const range=arraysize;
        const newarray2=Array.from(
            {length:arraysize},
            ()=>Math.floor(Math.random()*range)+1
        );
        setarrayelements(newarray2);
        
        toast.success("ARRAY CREATED FOR LINEAR SEARCH ",{theme:"colored"});

    }

    
}
async function Linearsearch(){
  if(!key){
    toast.error("PLEASE ENTER THE KEY ",{theme:"colored"});
    return ;
  }
  const searchkey=Number(key);
  setfoundindex(-1);
  setresult("");
  for(let i=0;i<arrayselemnts.length;i++){
    setactiveindex(i);
    await new Promise(res=>setTimeout(res,500));
    if(arrayselemnts[i]===searchkey){
      setfoundindex(i);
      setactiveindex(-1);
      setresult(`THE KEY FOUND AT INDEX ${i}`);
      
      return ;
  }
    setactiveindex(-1);
      
  
  }
  setresult(`THE KEY IS NOT FOUND `);
  
  }
return <Helper.Provider value={{RandomArray,linearsearch,binarysearch,setbinarysearch,setlinearsearch,arraysize,setarraysize,arrayselemnts,setarrayelements,options,Linearsearch,setsearchelement,result,activeindex,foundindex}}>
        {children}
    </Helper.Provider>

}
