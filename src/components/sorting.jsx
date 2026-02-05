import { useContext } from "react";
import { Helper } from "../store/store";
import { CChart } from '@coreui/react-chartjs'
import { ToastContainer } from 'react-toastify';
function Sort(){
    const {RandomArray,merge,quick,selection,insertion,bubble,setmerge,setinsertion,setquick,setselection,setbubble,arrayselemnts,options,setarraysize,activeindex,foundindex,range,Selection,time,pass,speed,setspeed,Insertion,Bubbles}=useContext(Helper);
    const chartdata={
        labels:arrayselemnts,
            datasets:[
                {
                    data:arrayselemnts,
                    backgroundColor:arrayselemnts.map((_,index)=>{
                       if(index<=range.start){
                        return "pink";
                       }
                   if(index===activeindex||index===range.end){
                        return "gold";
                       }
                    
                        
                        return "rgba(54,162,235,0.9)"
         })
            },
                ],
        };
        const bubblec={
        labels:arrayselemnts,
            datasets:[
                {
                    data:arrayselemnts,
                    backgroundColor:arrayselemnts.map((_,index)=>{
                    if(index===activeindex||index===activeindex+1){
                        return "gold";
                       }
                       if(range.start!==-1 && index>=range.start){
                        return "pink";
                       }
                    
                        
                        return "rgba(54,162,235,0.9)"
         })
            },
                ],
        };
    return <div className="flex justify-center items-center mt-20">
        <ToastContainer/>
        <div>
            {merge?<div>
                <div>
                    <h1 onClick={()=>setmerge(false)}>X</h1>
                </div>
                <div>
                    <CChart type="bar" data={chartdata} options={options} className="w-250 "/>

                </div>
                <div>
                    <h1 className="text-2xl text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("merge")}>GENRATE</button>
                </div>
                 <div className="mt-5">
                    <button className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                

            </div>:<></>}
            {quick?<div>
                <div>
                    <h1 onClick={()=>setquick(false)}>X</h1>
                </div>
                <div>
                    <CChart type="bar" data={chartdata} options={options} className="w-250 "/>
                    
                </div>
                <div>
                    <h1 className="text-2xl text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("quick")}>GENRATE</button>
                </div>
                 <div className="mt-5">
                    <button  className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                

            </div>:<></>}
            {insertion?<div>
                <div>
                    <h1 onClick={()=>setinsertion(false)}>X</h1>
                </div>
                <div>
                    <CChart type="bar" data={chartdata} options={options} className="w-250 "/>
                    
                </div>
                <div>
                    <h1 className="text-2xl text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("insert")}>GENRATE</button>
                </div>
                 <div className="mt-5">
                    <button onClick={Insertion}className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                <div>
                    <h2>THE TIME IN SECONDS IS: {time}sec</h2>
                </div>
                <div>
                    <h1>SELECT SPEED</h1>
                    <div>
                        
                    <select name="speed" id="speed" onChange={(e)=>setspeed(e.target.value)} >
                        
                        <option value="0.25" >0.25 x</option>
                        <option value="0.5">0.5 x</option>
                        <option value="0.75">0.75 x</option>
                        <option value="1.0">1.0 x</option>
                        <option value="1.25">1.25 x </option>
                        <option value="1.5">1.5 x </option>
                        <option value="1.75">1.75 x </option>
                        <option value="2.0">2.0 x </option>

                    </select>
                    </div>
                </div>
                <div>
                    {pass.map((p,index)=>(
                        <div key={index}>
                        <h1>PASS {index+1}</h1>
                        <p>[{p.join(",")}]</p>
                        </div>
                    ))}
                </div>
                

            </div>:<></>}
            {selection?<div>
                <div>
                    <h1 onClick={()=>setselection(false)}>X</h1>
                </div>
                <div>
                    <CChart type="bar" data={chartdata} options={options} className="w-250 "/>
                    
                </div>
                <div>
                    <h1 className="text-2xl text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("select")}>GENRATE</button>
                </div>
                 <div className="mt-5">
                    <button onClick={Selection}  className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                <div>
                    <h2>THE TIME IN SECONDS IS: {time}sec</h2>
                </div>
                <div>
                    <h1>SELECT SPEED</h1>
                    <div>
                        
                    <select name="speed" id="speed" onChange={(e)=>setspeed(e.target.value)} >
                        
                        <option value="0.25" >0.25 x</option>
                        <option value="0.5">0.5 x</option>
                        <option value="0.75">0.75 x</option>
                        <option value="1.0">1.0 x</option>
                        <option value="1.25">1.25 x </option>
                        <option value="1.5">1.5 x </option>
                        <option value="1.75">1.75 x </option>
                        <option value="2.0">2.0 x </option>

                    </select>
                    </div>
                </div>
                <div>
                    {pass.map((p,index)=>(
                        <div key={index}>
                        <h1>PASS {index+1}</h1>
                        <p>[{p.join(",")}]</p>
                        </div>
                    ))}
                </div>
                
            </div>:<></>}
            {bubble?<div>
                <div>
                    <h1 onClick={()=>setbubble(false)}>X</h1>
                </div>
                <div>
                    <CChart key={`${activeindex}-${range.start}-${arrayselemnts.join(",")}`} type="bar" data={bubblec} options={options} className="w-250 "/>
                    
                </div>
                <div>
                    <h1 className="text-2xl text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("bubble")}>GENRATE</button>
                </div>
                 <div className="mt-5">
                    <button onClick={Bubbles}  className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
                </div>
                <div>
                    <h2>THE TIME IN SECONDS IS: {time}sec</h2>
                </div>
                <div>
                    <h1>SELECT SPEED</h1>
                    <div>
                        
                    <select name="speed" id="speed" onChange={(e)=>setspeed(e.target.value)} >
                        
                        <option value="0.25" >0.25 x</option>
                        <option value="0.5">0.5 x</option>
                        <option value="0.75">0.75 x</option>
                        <option value="1.0">1.0 x</option>
                        <option value="1.25">1.25 x </option>
                        <option value="1.5">1.5 x </option>
                        <option value="1.75">1.75 x </option>
                        <option value="2.0">2.0 x </option>

                    </select>
                    </div>
                </div>
                <div>
                    {pass.map((p,index)=>(
                        <div key={index}>
                        <h1>PASS {index+1}</h1>
                        <p>[{p.join(",")}]</p>
                        </div>
                    ))}
                </div>
                

            </div>:<></>}
        </div>
      <div className="flex gap-7">
            <button onClick={()=>setmerge(true)} className="bg-blue-800 p-4 text-white rounded-2xl">MERGE-SORT</button>
            <button onClick={()=>setquick(true)} className="bg-blue-800 p-4 text-white rounded-2xl">QUICK-SORT</button>
            <button onClick={()=>setinsertion(true)} className="bg-blue-800 p-4 text-white rounded-2xl">INSERTION-SORT</button>
            <button onClick={()=>setbubble(true)} className="bg-blue-800 p-4 text-white rounded-2xl">BUBBLE-SORT</button>
            <button onClick={()=>setselection(true)} className="bg-blue-800 p-4 text-white rounded-2xl">SELECTION-SORT</button>
        </div>


    </div>

}
export default Sort;