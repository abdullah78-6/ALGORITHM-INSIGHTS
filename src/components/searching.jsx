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
    return <div className="mt-30">
        <ToastContainer/>
        
        <div>
            {linearsearch?<div className="flex justify-center flex-col items-center">
                <div className="relative">
                <h1 className=" cursor-pointer absolute left-30 top-[-20px]" onClick={()=>setlinearsearch(false)}>X</h1>
                </div>
                <h1>LINEAR SEARCH GRAPH</h1>
                <div>
                     <CChart type="bar" data={chartdata} options={options} className="w-250 "/>
                     
                   
                </div>
                <div>
                    <h1 className="text-2xl text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("linearsearch")}>GENRATE</button>
                </div>
                <div className="mt-5">
                    <label htmlFor="search key">ENTER SEARCH ELEMENT</label>
                    <input onChange={(e)=>setsearchelement(e.target.value)} type="number"placeholder="enter search element"/>
                </div>
                <div className="mt-5">
                    <button onClick={Linearsearch} className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                <div>
                    <h1>THE FINAL RESULT IS: {result}</h1>
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
                    <label for="search">ENTER SEARCH ELEMENT</label>
                    <input type="Number"placeholder="enter search element" onChange={(e)=>setbkey(e.target.value)}/>
                </div>
                <div>
                    <button onClick={Binary} className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                <div>
                    <h1>THE FINAL RESULT IS: {result2}</h1>
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