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
     const chartdata1={
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

     return (
    <div className="min-h-screen px-4 py-10">
      <ToastContainer />

    
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
          SEARCHING IN PROGRAMMING
        </h1>
        <p className="text-blue-700 text-base md:text-lg leading-relaxed">
          Searching in programming is a fundamental concept used to locate a
          specific element within a collection. Linear search works on unsorted
          data, while binary search is faster but requires sorted arrays.
        </p>
      </div>

    
      {linearsearch && (
        <div className="max-w-5xl mx-auto mt-16 bg-white shadow-2xl rounded-3xl p-6 md:p-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-blue-900">
              LINEAR SEARCH
            </h2>
            <button
              className="text-red-600 font-bold"
              onClick={() => setlinearsearch(false)}
            >
              ✕
            </button>
          </div>

          <CChart type="bar" data={chartdata1} options={options} />

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-blue-900 mb-2">Array Size</label>
              <input
                type="number"
                className="w-full border-2 border-blue-800 rounded-xl p-3"
                onChange={(e) => setarraysize(e.target.value)}
              />
            </div>
            <button
              className="bg-green-800 text-white rounded-xl p-3 self-end"
              onClick={() => RandomArray("linearsearch")}
            >
              Generate
            </button>
          </div>

          <div className="mt-6">
            <label className="block text-blue-900 mb-2">
              Search Element
            </label>
            <input
              type="number"
              className="w-full border-2 border-blue-800 rounded-xl p-3"
              onChange={(e) => setsearchelement(e.target.value)}
            />
          </div>

          <button
            onClick={Linearsearch}
            className="mt-6 bg-red-800 text-white rounded-xl px-6 py-3"
          >
            Submit
          </button>

          <p className="mt-4 text-blue-900">
            Result: <span className="text-red-700">{result}</span>
          </p>
        </div>
      )}

    
      {binarysearch && (
        <div className="max-w-5xl mx-auto mt-16 bg-white shadow-2xl rounded-3xl p-6 md:p-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-blue-900">
              BINARY SEARCH
            </h2>
            <button
              className="text-red-600 font-bold"
              onClick={() => setbinarysearch(false)}
            >
              ✕
            </button>
          </div>

          <CChart type="bar" data={chartdata1} options={options} />

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-blue-900 mb-2">Array Size</label>
              <input
                type="number"
                className="w-full border-2 border-blue-800 rounded-xl p-3"
                onChange={(e) => setarraysize(e.target.value)}
              />
            </div>
            <button
              className="bg-green-800 text-white rounded-xl p-3 self-end"
              onClick={() => RandomArray("binarysearch")}
            >
              Generate
            </button>
          </div>

          <div className="mt-6">
            <label className="block text-blue-900 mb-2">
              Search Element
            </label>
            <input
              type="number"
              className="w-full border-2 border-blue-800 rounded-xl p-3"
              onChange={(e) => setbkey(e.target.value)}
            />
          </div>

          <button
            onClick={Binary}
            className="mt-6 bg-red-800 text-white rounded-xl px-6 py-3"
          >
            Submit
          </button>

          <p className="mt-4 text-blue-900">
            Result: <span className="text-red-700">{result2}</span>
          </p>
        </div>
      )}

    
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        <button
          onClick={() => setlinearsearch(true)}
          className="bg-blue-800 text-white px-6 py-3 rounded-xl"
        >
          Linear Search
        </button>
        <button
          onClick={() => setbinarysearch(true)}
          className="bg-blue-800 text-white px-6 py-3 rounded-xl"
        >
          Binary Search
        </button>
      </div>
    </div>
  );
}
export default Search;    