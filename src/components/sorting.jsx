import { useContext } from "react";
import { Helper } from "../store/store";
import { CChart } from '@coreui/react-chartjs'
import { ToastContainer } from 'react-toastify';
function Sort(){
    const {RandomArray,merge,quick,selection,insertion,bubble,setmerge,setinsertion,setquick,setselection,setbubble,arrayselemnts,options,setarraysize,activeindex,foundindex,range,Selection,time,pass,speed,setspeed,Insertion,Bubbles,Quicks,pivotindex,Merges,mergerange,mergecompare,mergesortedtill,mergesplit}=useContext(Helper);
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



        const chartdataquick={
        labels:arrayselemnts,
            datasets:[
                {
                    data:arrayselemnts,
                    backgroundColor:arrayselemnts.map((_,index)=>{
                       if(range.start!==-1&&index<=range.start){
                        return "pink";
                       }
                   if(index===pivotindex){
                        return "green";
                       }
                       if(index===activeindex){
                        return "gold";
                       }
                    
                        
                        return "rgba(54,162,235,0.9)"
         })
            },
                ],
        };


        const chartdatamerge={
        labels:arrayselemnts,
            datasets:[
                {
                    data:arrayselemnts,
                    backgroundColor:arrayselemnts.map((_,index)=>{
                      if(index<=mergesortedtill){
                        return "pink";
                      }
                   if(mergecompare.includes(index)){
                    return "gold";
                   }
                       if(
                        mergerange.start!==-1&&
                        index>=mergesplit.start&&
                        index<=mergesplit.end

                       )
                       {
                        return "brown";
                        
                       }
                    
                        
                        return "rgba(54,162,235,0.9)"
         })
            },
                ],
        };
        
    return <div className="flex justify-center items-center mt-20">
        <ToastContainer/>
        <div>
            {/* {merge?<div >
                <div>
                    <h1 onClick={()=>setmerge(false)}>X</h1>
                </div>
                <div>
                    <CChart type="bar" data={chartdatamerge} options={options} className="w-250 "/>

                </div>
                <div>
                    <h1 className="text-2xl text-center">THIS IS YOUR GIVEN ARRAY </h1>
                    <label htmlFor="enter array size">ARRAY SIZE</label>
                    <input type="number" placeholder="enter array size" onChange={(e)=>setarraysize(e.target.value)}/>
                    <button className="bg-green-800 p-4 text-white rounded-2xl" onClick={()=>RandomArray("merge")}>GENRATE</button>
                </div>
                 <div className="mt-5">
                    <button onClick={Merges} className="bg-red-800 p-4 text-white rounded-2xl">SUBMIT</button>
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
                

            </div>:<></>} */}
            {merge ? (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl overflow-y-auto max-h-[95vh]">

      {/* Close Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setmerge(false)}
          className="text-xl font-bold text-gray-500 hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Chart */}
      <div className="mt-4 flex justify-center">
        <CChart
          type="bar"
          data={chartdatamerge}
          options={options}
          className="w-full md:w-[700px]"
        />
      </div>

      {/* Array Controls */}
      <div className="mt-6 text-center space-y-4">
        <h1 className="text-2xl font-semibold">THIS IS YOUR GIVEN ARRAY</h1>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <label className="font-medium">ARRAY SIZE</label>
          <input
            type="number"
            placeholder="Enter array size"
            onChange={(e) => setarraysize(e.target.value)}
            className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            className="rounded-xl bg-green-700 px-5 py-2 text-white hover:bg-green-800 transition"
            onClick={() => RandomArray("merge")}
          >
            GENERATE
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={Merges}
          className="rounded-xl bg-red-700 px-6 py-3 text-white hover:bg-red-800 transition"
        >
          SUBMIT
        </button>
      </div>

      {/* Time */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium">
          THE TIME IN SECONDS IS: <span className="font-bold">{time}</span> sec
        </h2>
      </div>

      {/* Speed Selector */}
      <div className="mt-6 text-center space-y-2">
        <h1 className="text-xl font-semibold">SELECT SPEED</h1>
        <select
          name="speed"
          id="speed"
          onChange={(e) => setspeed(e.target.value)}
          className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1.0">1.0x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="1.75">1.75x</option>
          <option value="2.0">2.0x</option>
        </select>
      </div>

    </div>
  </div>
) : null}

{quick ? (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl overflow-y-auto max-h-[95vh]">

      {/* Close */}
      <div className="flex justify-end">
        <button
          onClick={() => setquick(false)}
          className="text-xl font-bold text-gray-500 hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Chart */}
      <div className="mt-4 flex justify-center">
        <CChart
          type="bar"
          data={chartdataquick}
          options={options}
          className="w-full md:w-[700px]"
        />
      </div>

      {/* Array Section */}
      <div className="mt-6 text-center space-y-4">
        <h1 className="text-2xl font-semibold">
          THIS IS YOUR GIVEN ARRAY
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <label className="font-medium">ARRAY SIZE</label>
          <input
            type="number"
            placeholder="Enter array size"
            onChange={(e) => setarraysize(e.target.value)}
            className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            className="rounded-xl bg-green-700 px-5 py-2 text-white hover:bg-green-800 transition"
            onClick={() => RandomArray("quick")}
          >
            GENERATE
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={Quicks}
          className="rounded-xl bg-red-700 px-6 py-3 text-white hover:bg-red-800 transition"
        >
          SUBMIT
        </button>
      </div>

      {/* Time */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium">
          THE TIME IN SECONDS IS:{" "}
          <span className="font-bold">{time}</span> sec
        </h2>
      </div>

      {/* Speed */}
      <div className="mt-6 text-center space-y-2">
        <h1 className="text-xl font-semibold">SELECT SPEED</h1>
        <select
          name="speed"
          id="speed"
          onChange={(e) => setspeed(e.target.value)}
          className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1.0">1.0x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="1.75">1.75x</option>
          <option value="2.0">2.0x</option>
        </select>
      </div>

      {/* Optional Pass Display (Responsive) */}
      {/*
      <div className="mt-6 space-y-3">
        {pass.map((p, index) => (
          <div
            key={index}
            className="rounded-lg border p-3 text-center"
          >
            <h1 className="font-semibold">PASS {index + 1}</h1>
            <p className="break-words">[{p.join(", ")}]</p>
          </div>
        ))}
      </div>
      */}

    </div>
  </div>
) : null}

            {/* {insertion?<div>
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
                

            </div>:<></>} */}
            {insertion ? (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl overflow-y-auto max-h-[95vh]">

      {/* Close */}
      <div className="flex justify-end">
        <button
          onClick={() => setinsertion(false)}
          className="text-xl font-bold text-gray-500 hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Chart */}
      <div className="mt-4 flex justify-center">
        <CChart
          type="bar"
          data={chartdata}
          options={options}
          className="w-full md:w-[700px]"
        />
      </div>

      {/* Array Controls */}
      <div className="mt-6 text-center space-y-4">
        <h1 className="text-2xl font-semibold">
          THIS IS YOUR GIVEN ARRAY
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <label className="font-medium">ARRAY SIZE</label>
          <input
            type="number"
            placeholder="Enter array size"
            onChange={(e) => setarraysize(e.target.value)}
            className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            className="rounded-xl bg-green-700 px-5 py-2 text-white hover:bg-green-800 transition"
            onClick={() => RandomArray("insert")}
          >
            GENERATE
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={Insertion}
          className="rounded-xl bg-red-700 px-6 py-3 text-white hover:bg-red-800 transition"
        >
          SUBMIT
        </button>
      </div>

      {/* Time */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium">
          THE TIME IN SECONDS IS:{" "}
          <span className="font-bold">{time}</span> sec
        </h2>
      </div>

      {/* Speed */}
      <div className="mt-6 text-center space-y-2">
        <h1 className="text-xl font-semibold">SELECT SPEED</h1>
        <select
          name="speed"
          id="speed"
          onChange={(e) => setspeed(e.target.value)}
          className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1.0">1.0x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="1.75">1.75x</option>
          <option value="2.0">2.0x</option>
        </select>
      </div>

      {/* Passes */}
      <div className="mt-8">
        <h1 className="mb-4 text-center text-xl font-semibold">
          INSERTION SORT PASSES
        </h1>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pass.map((p, index) => (
            <div
              key={index}
              className="rounded-xl border bg-gray-50 p-3 text-center shadow-sm"
            >
              <h2 className="font-semibold text-gray-700">
                PASS {index + 1}
              </h2>
              <p className="mt-1 break-words text-sm">
                [{p.join(", ")}]
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
) : null}

            {/* {selection?<div>
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
                
            </div>:<></>} */}
            {selection ? (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl overflow-y-auto max-h-[95vh]">

      {/* Close */}
      <div className="flex justify-end">
        <button
          onClick={() => setselection(false)}
          className="text-xl font-bold text-gray-500 hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Chart */}
      <div className="mt-4 flex justify-center">
        <CChart
          type="bar"
          data={chartdata}
          options={options}
          className="w-full md:w-[700px]"
        />
      </div>

      {/* Array Controls */}
      <div className="mt-6 text-center space-y-4">
        <h1 className="text-2xl font-semibold">
          THIS IS YOUR GIVEN ARRAY
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <label className="font-medium">ARRAY SIZE</label>
          <input
            type="number"
            placeholder="Enter array size"
            onChange={(e) => setarraysize(e.target.value)}
            className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            className="rounded-xl bg-green-700 px-5 py-2 text-white hover:bg-green-800 transition"
            onClick={() => RandomArray("select")}
          >
            GENERATE
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={Selection}
          className="rounded-xl bg-red-700 px-6 py-3 text-white hover:bg-red-800 transition"
        >
          SUBMIT
        </button>
      </div>

      {/* Time */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium">
          THE TIME IN SECONDS IS:{" "}
          <span className="font-bold">{time}</span> sec
        </h2>
      </div>

      {/* Speed */}
      <div className="mt-6 text-center space-y-2">
        <h1 className="text-xl font-semibold">SELECT SPEED</h1>
        <select
          name="speed"
          id="speed"
          onChange={(e) => setspeed(e.target.value)}
          className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1.0">1.0x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="1.75">1.75x</option>
          <option value="2.0">2.0x</option>
        </select>
      </div>

      {/* Passes */}
      <div className="mt-8">
        <h1 className="mb-4 text-center text-xl font-semibold">
          SELECTION SORT PASSES
        </h1>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pass.map((p, index) => (
            <div
              key={index}
              className="rounded-xl border bg-gray-50 p-3 text-center shadow-sm"
            >
              <h2 className="font-semibold text-gray-700">
                PASS {index + 1}
              </h2>
              <p className="mt-1 break-words text-sm">
                [{p.join(", ")}]
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
) : null}

            {/* {bubble?<div>
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
                

            </div>:<></>} */}
            {bubble ? (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-xl overflow-y-auto max-h-[95vh]">

      {/* Close */}
      <div className="flex justify-end">
        <button
          onClick={() => setbubble(false)}
          className="text-xl font-bold text-gray-500 hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Chart */}
      <div className="mt-4 flex justify-center">
        <CChart
          key={`${activeindex}-${range.start}-${arrayselemnts.join(",")}`}
          type="bar"
          data={bubblec}
          options={options}
          className="w-full md:w-[700px]"
        />
      </div>

      {/* Array Controls */}
      <div className="mt-6 text-center space-y-4">
        <h1 className="text-2xl font-semibold">
          THIS IS YOUR GIVEN ARRAY
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <label className="font-medium">ARRAY SIZE</label>
          <input
            type="number"
            placeholder="Enter array size"
            onChange={(e) => setarraysize(e.target.value)}
            className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            className="rounded-xl bg-green-700 px-5 py-2 text-white hover:bg-green-800 transition"
            onClick={() => RandomArray("bubble")}
          >
            GENERATE
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={Bubbles}
          className="rounded-xl bg-red-700 px-6 py-3 text-white hover:bg-red-800 transition"
        >
          SUBMIT
        </button>
      </div>

      {/* Time */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium">
          THE TIME IN SECONDS IS:{" "}
          <span className="font-bold">{time}</span> sec
        </h2>
      </div>

      {/* Speed */}
      <div className="mt-6 text-center space-y-2">
        <h1 className="text-xl font-semibold">SELECT SPEED</h1>
        <select
          name="speed"
          id="speed"
          onChange={(e) => setspeed(e.target.value)}
          className="w-40 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1.0">1.0x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="1.75">1.75x</option>
          <option value="2.0">2.0x</option>
        </select>
      </div>

      {/* Passes */}
      <div className="mt-8">
        <h1 className="mb-4 text-center text-xl font-semibold">
          BUBBLE SORT PASSES
        </h1>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pass.map((p, index) => (
            <div
              key={index}
              className="rounded-xl border bg-gray-50 p-3 text-center shadow-sm"
            >
              <h2 className="font-semibold text-gray-700">
                PASS {index + 1}
              </h2>
              <p className="mt-1 break-words text-sm">
                [{p.join(", ")}]
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
) : null}

        </div>
      {/* <div className="flex  gap-7">
            <button onClick={()=>setmerge(true)} className="bg-blue-800 p-4 text-white rounded-2xl">MERGE-SORT</button>
            <button onClick={()=>setquick(true)} className="bg-blue-800 p-4 text-white rounded-2xl">QUICK-SORT</button>
            <button onClick={()=>setinsertion(true)} className="bg-blue-800 p-4 text-white rounded-2xl">INSERTION-SORT</button>
            <button onClick={()=>setbubble(true)} className="bg-blue-800 p-4 text-white rounded-2xl">BUBBLE-SORT</button>
            <button onClick={()=>setselection(true)} className="bg-blue-800 p-4 text-white rounded-2xl">SELECTION-SORT</button>
        </div> */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
  <button
    onClick={() => setmerge(true)}
    className="rounded-xl bg-blue-700 px-6 py-3 text-sm sm:text-base text-white shadow-md transition hover:bg-blue-800 active:scale-95"
  >
    MERGE SORT
  </button>

  <button
    onClick={() => setquick(true)}
    className="rounded-xl bg-blue-700 px-6 py-3 text-sm sm:text-base text-white shadow-md transition hover:bg-blue-800 active:scale-95"
  >
    QUICK SORT
  </button>

  <button
    onClick={() => setinsertion(true)}
    className="rounded-xl bg-blue-700 px-6 py-3 text-sm sm:text-base text-white shadow-md transition hover:bg-blue-800 active:scale-95"
  >
    INSERTION SORT
  </button>

  <button
    onClick={() => setbubble(true)}
    className="rounded-xl bg-blue-700 px-6 py-3 text-sm sm:text-base text-white shadow-md transition hover:bg-blue-800 active:scale-95"
  >
    BUBBLE SORT
  </button>

  <button
    onClick={() => setselection(true)}
    className="rounded-xl bg-blue-700 px-6 py-3 text-sm sm:text-base text-white shadow-md transition hover:bg-blue-800 active:scale-95"
  >
    SELECTION SORT
  </button>
</div>



    </div>

}
export default Sort;