import { createContext, useState } from "react";
import {  toast } from 'react-toastify';
export const Helper=createContext();
export const Gives=({children})=>{
const [linearsearch,setlinearsearch]=useState(false);
const [binarysearch,setbinarysearch]=useState(false);
const [arraysize,setarraysize]=useState();
const [arrayselemnts,setarrayelements]=useState([]);
const [options,setoptions]=useState({
     plugins: {
      legend: {
        labels: {
          color: "blue"
        },
      },
    },
    scales: {
    //   x: {
    //     grid: {
    //       color: "darkblue"
    //     },
    //     ticks: {
    //       color: "blue"
    //     },
    //     type: 'category',
    //   },
      y: {
        grid: {
          color: "blue"
        },
        ticks: {
          color: "orange",
          display:false
          
        },
        beginAtZero: false,
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
return <Helper.Provider value={{RandomArray,linearsearch,binarysearch,setbinarysearch,setlinearsearch,arraysize,setarraysize,arrayselemnts,setarrayelements,options}}>
        {children}
    </Helper.Provider>

}
