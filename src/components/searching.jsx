import { useContext } from "react";
import Nav from "./navbar";
import { Helper } from "../store/store";
import { ToastContainer } from 'react-toastify';
import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';


import { CChart } from '@coreui/react-chartjs'
// Enable all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
function Search(){
    const{RandomArray,linearsearch,binarysearch,setbinarysearch,setlinearsearch,setarraysize,arrayselemnts,setarrayelements,options}=useContext(Helper);
    const chartdata={
        labels:arrayselemnts.map((_,i)=>i+1),
        datasets:[
            {
                data:arrayselemnts,
                backgroundColor:"rgba(54,162,235,0.6)",
    
            },
        ],
    };
    
    return <div className="mt-30">
        <ToastContainer/>
        
        <div>
            {linearsearch?<div className="flex justify-center flex-col items-center">
                <div className="relative">
                <h1 className=" cursor-pointer absolute left-30 top-[-20px]" onClick={()=>setlinearsearch(false)}>X</h1>
                </div>
                <h1>LINEAR SEARCH GRAPH</h1>
                <div>
                     <CChart type="bar" data={chartdata} options={options} className="w-250"/>
                   
                </div>
                <div>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("linearsearch")}>GENRATE</button>
                </div>
                <div>
                    <button className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>

            </div>:<></>}
            {binarysearch?<div className="flex justify-center flex-col items-center">
                <div className="relative">
                <h1 className=" cursor-pointer absolute left-30 top-[-20px]" onClick={()=>setbinarysearch(false)}>X</h1>
                </div>
                <h1>BINARY SEARCH GRAPH</h1>
                <div>
                    <CChart type="bar" data={chartdata} options={options} className="w-250"/>
                      

                </div>
                 <div>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("binarysearch")}>GENRATE</button>
                </div>
                <div>
                    <button className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
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