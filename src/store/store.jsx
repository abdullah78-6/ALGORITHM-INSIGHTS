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
const[merge,setmerge]=useState(false);
const[quick,setquick]=useState(false);
const[selection,setselection]=useState(false);
const[insertion,setinsertion]=useState(false);
const[bubble,setbubble]=useState(false);
const[time,settime]=useState();
const [speed,setspeed]=useState();
const[pass,setpass]=useState([]);
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
  setrange({start:-1,end:-1})
  setactiveindex(-1);
  setfoundindex(-1);
  setpass([]);
  settime(null);

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
    if(name==="merge"){
        // unsorted order 
        const range=arraysize;
        const newarray2=Array.from(
            {length:arraysize},
            ()=>Math.floor(Math.random()*range)+1
        );
        setarrayelements(newarray2);
        
        toast.success("ARRAY CREATED FOR MERGE SORT ",{theme:"colored"});
        

    }
    if(name==="quick"){
        // unsorted order 
        const range=arraysize;
        const newarray2=Array.from(
            {length:arraysize},
            ()=>Math.floor(Math.random()*range)+1
        );
        setarrayelements(newarray2);
        
        toast.success("ARRAY CREATED FOR QUICK SORT ",{theme:"colored"});

    }
    if(name==="select"){
        // unsorted order 
        const range=arraysize;
        const newarray2=Array.from(
            {length:arraysize},
            ()=>Math.floor(Math.random()*range)+1
        );
        setarrayelements(newarray2);
        
        toast.success("ARRAY CREATED FOR SELECTION SORT ",{theme:"colored"});

    }
    if(name==="insert"){
        // unsorted order 
        const range=arraysize;
        const newarray2=Array.from(
            {length:arraysize},
            ()=>Math.floor(Math.random()*range)+1
        );
        setarrayelements(newarray2);
        
        toast.success("ARRAY CREATED FOR INSERTION SORT ",{theme:"colored"});

    }
    if(name==="bubble"){
        // unsorted order 
        const range=arraysize;
        const newarray2=Array.from(
            {length:arraysize},
            ()=>Math.floor(Math.random()*range)+1
        );
        setarrayelements(newarray2);
        
        toast.success("ARRAY CREATED FOR BUBBLE SORT ",{theme:"colored"});

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
async function Selection(){
  if(arrayselemnts.length===0){
    toast.error("PLEASE GENRATE ARRAY FIRST",{theme:"colored"});
    return ;
  }
  const starttime=performance.now();
  let arr=[...arrayselemnts];
  setpass([]);
  for(let i=0;i<arr.length;i++){
    let minindex=i;
    
    
    setrange({start:i-1,end:minindex});
    await new Promise(res=>setTimeout(res,500));
    for(let j=i+1;j<arr.length;j++){
      setactiveindex(j);
      setrange({start:i-1,end:minindex});
      await new Promise(res=>setTimeout(res,400));
      if(arr[j]<arr[minindex]){
        minindex=j;
      setrange({start:i-1,end:minindex});
        await new Promise(res=>setTimeout(res,400));
      }
    }
    // swap(arrayselemnts[minindex],arrayselemnts[i]);
    let temp=arr[minindex];
    arr[minindex]=arr[i];
    arr[i]=temp;
    setarrayelements([...arr]);
    setpass(prev=>[...prev,[...arr]]);
    setrange({start:i,end:-1});
    setactiveindex(-1);
    await new Promise(res=>setTimeout(res,500));
    
  }
  setrange({start:arr.length-1,end:-1});
  const endtime=performance.now();
  const totaltime=((endtime-starttime)/1000).toFixed(2);
  settime(totaltime);
}
return <Helper.Provider value={{RandomArray,linearsearch,binarysearch,setbinarysearch,setlinearsearch,arraysize,setarraysize,arrayselemnts,setarrayelements,options,Linearsearch,setsearchelement,result,activeindex,foundindex,Binary,setbkey,result2,range,merge,quick,selection,insertion,bubble,setmerge,setinsertion,setquick,setselection,setbubble,Selection,time,pass}}>
        {children}
    </Helper.Provider>

}
