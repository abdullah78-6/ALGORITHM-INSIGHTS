import { useContext } from "react";
import { Helper } from "../store/store";
import { ToastContainer } from 'react-toastify';
import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';
import { CChart } from '@coreui/react-chartjs'
// Enable all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
function Search(){
    const{RandomArray,linearsearch,binarysearch,setbinarysearch,setlinearsearch,setarraysize,arrayselemnts,setarrayelements,options,Linearsearch,setsearchelement,result,activeindex,foundindex,Binary,setbkey,result2,range}=useContext(Helper);
     const chartdata={
        labels:arrayselemnts,
            datasets:[
                {
                    data:arrayselemnts,
                    backgroundColor:arrayselemnts.map((_,index)=>{
                        if(index===foundindex){
                            return "purple";
                        }
                        if(index===activeindex){
                            return "green";
                        }
                        if(index===range.start||index===range.end){
                            return "green";
                        }
                        return "rgba(54,162,235,0.9)"
                    })
                    
                    
                    
                },
            ],
        };
    return <div className="mt-5">
        <ToastContainer/>
        <div className="flex  justify-center items-center flex-col">
            <h1 className="text-center font-bold  p-3 text-6xl text-blue-900    ">SEARCHING IN PROGRAMMING</h1>
            <div className="mt-3">
                <p className="text-2xl capitalize text-blue-700 w-250 ">
                   Searching in programming is a fundamental concept used to locate a specific element or piece of data within a collection such as an array, list, or database. It plays a crucial role in almost every software application, from finding a user in a system to retrieving information from large datasets. Efficient searching helps reduce time complexity and improves the overall performance of programs, especially when dealing with large amounts of data.

There are different searching techniques based on how the data is organized. Linear search checks each element one by one and is simple to implement, making it useful for small or unsorted datasets. Binary search, on the other hand, is much faster but requires the data to be sorted beforehand. It repeatedly divides the search space in half, significantly reducing the number of comparisons needed. 
                </p>
            </div>
        </div>
        
        <div>
            {linearsearch?<div className="flex justify-center flex-col items-center mt-20 shadow-2xl rounded-3xl p-8 rounded-3xl">
                <div className="relative">
                <h1 className=" text-red-900 text-2xl cursor-pointer absolute left-40 top-[-30px]" onClick={()=>setlinearsearch(false)}>X</h1>
                </div>
                <h1 className="text-3xl text-blue-900">LINEAR SEARCH GRAPH</h1>
                <div className="mt-3">
                     <CChart type="bar" data={chartdata} options={options} className="w-200" />
                     
                   
                </div>
                <div>
                    <h1 className="text-2xl text-blue-900 text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size " className="text-2xl p-4 text-blue-900">ARRAY SIZE</label>
                    <input className="text-2xl p-4 rounded-4xl border-2 border-blue-900 text-blue-700" type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 ml-3 text-white rounded-2xl" onClick={()=>RandomArray("linearsearch")}>GENRATE</button>
                </div>
                <div className="mt-5">
                    <label className="text-2xl p-4 text-blue-900" htmlFor="search key">ENTER SEARCH ELEMENT</label>
                    <input  className="text-2xl p-4 rounded-4xl border-2 border-blue-900 text-blue-700" onChange={(e)=>setsearchelement(e.target.value)} type="number"placeholder="enter search element"/>
                </div>
                <div className="mt-5">
                    <button onClick={Linearsearch} className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                <div>
                    <h1 className="text-2xl p-4 text-blue-900">THE FINAL RESULT IS: <span className="text-red-700">{result}</span></h1>
                </div>

            </div>:<></>}
            {binarysearch?<div className="flex justify-center flex-col items-center mt-20 shadow-2xl rounded-3xl p-8 rounded-3xl">
                <div className="relative">
                <h1 className=" text-red-900 text-2xl cursor-pointer absolute left-40 top-[-30px]" onClick={()=>setbinarysearch(false)}>X</h1>
                </div>
                <h1 className="text-3xl text-blue-900">BINARY SEARCH GRAPH</h1>
                <div className="mt-3">
                    <CChart type="bar" data={chartdata} options={options} className="w-200"/>
                      

                </div>
                 <div >
                    <h1 className="text-2xl text-blue-900 text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size" className="text-2xl p-3  text-blue-900">ARRAY SIZE</label>
                    <input className="text-2xl p-4 rounded-4xl border-2 border-blue-900 text-blue-700" type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl ml-3" onClick={()=>RandomArray("binarysearch")}>GENRATE</button>
                </div>
                <div className="mt-4 flex justify-center items-center">
                    <label className="text-2xl p-4 text-blue-900" for="search">ENTER SEARCH ELEMENT</label>
                    <input className="text-2xl p-4 rounded-4xl border-2 border-blue-900 text-blue-700" type="Number"placeholder="enter search element" onChange={(e)=>setbkey(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <button onClick={Binary} className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                <div>
                    <h1 className="text-2xl p-4 text-blue-900">THE FINAL RESULT IS: <span className="text-red-700">{result2}</span></h1>
                </div>


            </div>:<></>}

        </div>
        <div className="flex justify-center items-center gap-7 mt-30">
            <button onClick={()=>setlinearsearch(true)} className="bg-blue-800 p-4 text-white rounded-2xl">LINEAR-SEARCH</button>
            <button onClick={()=>setbinarysearch(true)} className="bg-blue-800 p-4 text-white rounded-2xl">BINARY-SEARCH</button>
        </div>
        
    </div>

}
export default Search;    