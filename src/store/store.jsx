import { createContext, useState } from "react";
import {  toast } from 'react-toastify';
export const Helper=createContext();
export const Gives=({children})=>{
const [linearsearch,setlinearsearch]=useState(false);
const [pivotindex,setpivotindex]=useState(-1);
const [mergesplit,setmergesplit]=useState({start:-1,end:-1});
const [binarysearch,setbinarysearch]=useState(false);
const [arraysize,setarraysize]=useState();
const [arrayselemnts,setarrayelements]=useState([]);
const [key,setsearchelement]=useState();
const[result,setresult]=useState("");
const [mergerange,setmergerange]=useState({start:-1,end:-1});
const [mergecompare,setmergecompare]=useState([-1,-1]);
const [mergesortedtill,setmergesortedtill]=useState(-1);
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
let [speed,setspeed]=useState(0.25);
const[pass,setpass]=useState([]);
const [binarytime,setbinarytime]=useState();
const [lineartime,setlineartime]=useState();
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
  setmergesplit({start:-1,end:-1});
  setmergerange({start:-1,end:-1});
  setmergecompare([-1,-1]);
  setmergesortedtill(-1);

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
  let starttime1=performance.now();
  setfoundindex(-1);
  setresult("");
  for(let i=0;i<arrayselemnts.length;i++){
    setactiveindex(i);
    await new Promise(res=>setTimeout(res,500));
    if(arrayselemnts[i]===searchkey){
      setfoundindex(i);
      setactiveindex(-1);
      let endtime1=performance.now();
  const totaltime1=((endtime1-starttime1)/1000).toFixed(2);
  setlineartime(totaltime1);
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
    const startb=performance.now();
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
       const endb=performance.now();
    const totalb=((endb-startb)/1000).toFixed(2);
    setbinarytime(totalb);
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
const speeds=(basedelay)=>{
  return new Promise(resolve=>setTimeout(resolve,basedelay/Number(speed)));
}
async function Selection(){
  
  if(arrayselemnts.length===0||!speed){
    toast.error("PLEASE GENRATE ARRAY FIRST",{theme:"colored"});
    return ;
  }
  const starttime=performance.now();
  let arr=[...arrayselemnts];
  setpass([]);
  for(let i=0;i<arr.length;i++){
    let minindex=i;
    
    
    setrange({start:i-1,end:minindex});
    
    await speeds(500);
    for(let j=i+1;j<arr.length;j++){
      setactiveindex(j);
      setrange({start:i-1,end:minindex});
    
      await speeds(400);
      if(arr[j]<arr[minindex]){
        minindex=j;
      setrange({start:i-1,end:minindex});
    
        await speeds(400);
      }
    }
    
    let temp=arr[minindex];
    arr[minindex]=arr[i];
    arr[i]=temp;
    setarrayelements([...arr]);
    setpass(prev=>[...prev,[...arr]]);
    setrange({start:i,end:-1});
    setactiveindex(-1);
    
    await speeds(500);
    
  }
  setrange({start:arr.length-1,end:-1});
  const endtime=performance.now();
  const totaltime=((endtime-starttime)/1000).toFixed(2);
  settime(totaltime);
}
async function Insertion(){
if(arrayselemnts.length===0||!speed){
    toast.error("PLEASE GENRATE ARRAY FIRST",{theme:"colored"});
    return ;
  }
  const starttime2=performance.now();
  let arr=[...arrayselemnts];
  
  for(let i=1;i<arr.length;i++){
    setrange({start:i-1,end:i});
    setactiveindex(i);
    await speeds(500);
    let temp=arr[i];
    let j=i-1;
    
    
    for(;j>=0;j--){
      setactiveindex(j);
      setrange({start:i-1,end:j});
      await speeds(400);
      if(arr[j]>temp){
        arr[j+1]=arr[j];
        setarrayelements([...arr]);
      }
      else{
        break;
      }
    }
    
    arr[j+1]=temp;
    setarrayelements([...arr]);
    setpass(prev=>[...prev,[...arr]]);
    setactiveindex(-1);
    setrange({start:i,end:-1});
    await speeds(400);
    
}
setrange({start:arr.length-1,end:-1});
const endtime2=performance.now();
const totaltime2=((endtime2-starttime2)/1000).toFixed(2);
settime(totaltime2);
  

}
async function Bubbles(){
  if(arrayselemnts.length===0||!speed){
    toast.error("PLEASE GENRATE ARRAY FIRST",{theme:"colored"});
    return ;
  }
  
  setactiveindex(-1);
  setrange({start:-1,end:-1});
  await speeds(300);
  const starttime3=performance.now();
  let arr=[...arrayselemnts];
  
  for(let i=1;i<arr.length;i++){
    
    let swapped=false;
    setrange({start:-1,end:-1});
    
    for(let j=0;j<arr.length-i;j++){
      setactiveindex(j);
    await speeds(400);
      if(arr[j]>arr[j+1]){
        
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;

        swapped=true;
        setarrayelements([...arr]);
        await speeds(400);
    
        
      }
    }
    setrange({start:arr.length-i,end:-1});
    setactiveindex(-1);
   
    if(swapped===false){
      break;
    }
     
    setpass(prev=>[...prev,[...arr]]);
    
    
    
  }
  setrange({start:0 ,end:-1});
 
  const endtime3=performance.now();
  const totaltime3=((endtime3-starttime3)/1000).toFixed(2);
  settime(totaltime3);
  setarrayelements([...arr]);
}
async function Quicks(){
  if(arrayselemnts.length===0||!speed){
    toast.error("PLEASE GENRATE ARRAY FIRST",{theme:"colored"});
    return ;
  }
   const startq = performance.now();
  let arr = [...arrayselemnts];

  async function partition(low, high) {
    const pivot = arr[high];
    setpivotindex(high);
    setrange({start:low,end:high});
    let i = low - 1;

  
  

    for (let j = low; j < high; j++) {
      setactiveindex(j);
      await speeds(400);
  

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setarrayelements([...arr]);
        await speeds(400);
  
      }
    }

  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setarrayelements([...arr]);
    await speeds(400);
  
      setpivotindex(-1);
    return i + 1;
  }

  async function quickSort(low, high) {
    if (low < high) {
      const pi = await partition(low, high);
      await quickSort(low, pi - 1);
      await quickSort(pi + 1, high);
    }
  }

  await quickSort(0, arr.length - 1);

  
  setactiveindex(-1);
  setpivotindex(-1);
  setrange({start:arr.length-1,end:-1});
  setarrayelements([...arr]);

  const endq = performance.now();
  const totalq = ((endq - startq) / 1000).toFixed(2);
  settime(totalq);
}
const mergedelay=(ms=400)=>{
 return  new Promise(res=>setTimeout(res,ms/Number(speed)));
}
async function merges(arr, s, mid,e) {
  let temp=[];
  let i=s;
  let j=mid+1;
  setmergerange({start:s,end:e});
  await mergedelay();
  while(i<=mid&&j<=e){
    setmergecompare([i,j]);
    await mergedelay();
    if(arr[i]<=arr[j]){
      temp.push(arr[i++]);
    }
    else{
      temp.push(arr[j++]);
    }
  }
  while(i<=mid){
    temp.push(arr[i++]);
  }
  while(j<=e){
    temp.push(arr[j++]);

  }
  for(let k=0;k<temp.length;k++){
    arr[s+k]=temp[k];
    setarrayelements([...arr]);
    setmergesortedtill(s+k);
    await mergedelay(300);
  }
  setmergecompare([-1,-1]);

    

  
}
async function mergeSort(arr, s, e) {
    if (s >= e) { // base case
        return;
       
    }
    setmergesplit({start:s,end:e});
    await mergedelay(50);
    let mid = Math.floor((s + e) / 2);

    // left part
   await  mergeSort(arr, s, mid);

    // right part
    await mergeSort(arr, mid + 1, e);

    // merge
    await merges(arr, s,mid, e);
    setmergesplit({start:-1,end:-1});
     
}
async function Merges(){
  if(arrayselemnts.length===0||!speed){
    toast.error("PLEASE GENRATE ARRAY FIRST",{theme:"colored"});
    return ;
  }
  const sm=performance.now();
  let arr=[...arrayselemnts];
  setmergesortedtill(-1);
  await mergeSort(arr,0,arr.length-1);
  const em=performance.now();
  const tm=((em-sm)/1000).toFixed(2);
  settime(tm);
  
  

}
  

return <Helper.Provider value={{RandomArray,linearsearch,binarysearch,setbinarysearch,setlinearsearch,arraysize,setarraysize,arrayselemnts,setarrayelements,options,Linearsearch,setsearchelement,result,activeindex,foundindex,Binary,setbkey,result2,range,merge,quick,selection,insertion,bubble,setmerge,setinsertion,setquick,setselection,setbubble,Selection,time,pass,speed,setspeed,Insertion,Bubbles,lineartime,binarytime,Quicks,pivotindex,Merges,mergerange,mergecompare,mergesortedtill,mergesplit}}>
        {children}
    </Helper.Provider>

}
