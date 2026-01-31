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
const[result2,setresult2]=useState("");
const[activeindex,setactiveindex]=useState(-1);
const [foundindex,setfoundindex]=useState(-1);
const [bkey,setbkey]=useState();
const [range,setrange]=useState({start:-1,end:-1});
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
  async function Binary(){
  const bskey=Number(bkey);
    if(!bskey){
    toast.error("PLEASE ENTER THE KEY ",{theme:"colored"});
    return ;
    }
    let start=0;
    let end=arrayselemnts.length-1;
    setfoundindex(-1);
    setrange({start,end});
    while(start<=end){
    let mid=Math.floor((start+end)/2);
    setactiveindex(mid);
    await new Promise(res=>setTimeout(res,600));
    if(arrayselemnts[mid]===bskey){
      setfoundindex(mid);
      setactiveindex(-1);
      setrange({start:-1,end:-1});
         setresult2(`THE KEY IS FOUND AT INDEX ${mid}`);
        return ;
      }
      if(bskey>arrayselemnts[mid]){
        start=mid+1;
      }
      else{
        end=mid-1;
    }
      setrange({start,end});
      mid=(start+end)/2;
     
    }
    setactiveindex(-1);
    setrange({start:-1,end:-1});
    setresult2("THE KEY IS NOT FOUND ");
}
return <Helper.Provider value={{RandomArray,linearsearch,binarysearch,setbinarysearch,setlinearsearch,arraysize,setarraysize,arrayselemnts,setarrayelements,options,Linearsearch,setsearchelement,result,activeindex,foundindex,Binary,setbkey,result2,range}}>
        {children}
    </Helper.Provider>

}
