import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helper } from '../store/store';
import { CChart } from '@coreui/react-chartjs'
function Compare(){
    const {RandomArray,Linearsearch,Binary,lineartime,binarytime,arrayselemnts,range,foundindex,activeindex,options,result,result2,setarraysize,setsearchelement,setbkey}=useContext(Helper);
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







        const chartdatabinary={
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
    <div className="px-4 md:px-8 lg:px-16 py-6">

        <ToastContainer/>

        <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-900">
            COMPARISON BETWEEN LINEAR AND BINARY SEARCH
        </h1>

        
        <div className="mt-6 bg-blue-50 p-4 md:p-8 rounded-2xl shadow-lg text-sm md:text-lg leading-relaxed text-center text-2xl text-gray-700">
            <p>
                Linear search checks each element one by one. Works on sorted & unsorted data.
                <br/><br/>
                Binary search works only on sorted arrays and divides search space repeatedly.
            </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

        
            <div className="shadow-2xl rounded-3xl p-6 md:p-8 bg-white">

                <h1 className="text-xl md:text-3xl text-blue-900 text-center font-semibold">
                    LINEAR SEARCH
                </h1>

                <div className="mt-6 overflow-x-auto">
                    <CChart type="bar" data={chartdata} options={options}/>
                </div>

                <div className="mt-6 flex flex-col gap-4">

                    <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                        <input
                            className="w-full md:w-auto p-3 border-2 border-blue-900 rounded-xl"
                            type="number"
                            placeholder="Enter Array Size"
                            onChange={(e)=>setarraysize(e.target.value)}
                        />
                        <button
                            className="bg-green-700 hover:bg-green-800 transition text-white px-6 py-3 rounded-xl"
                            onClick={()=>RandomArray("linearsearch")}
                        >
                            GENERATE
                        </button>
                    </div>

                    <input
                        className="w-full md:w-1/2 mx-auto p-3 border-2 border-blue-900 rounded-xl"
                        type="number"
                        placeholder="Enter Search Element"
                        onChange={(e)=>setsearchelement(e.target.value)}
                    />

                    <button
                        onClick={Linearsearch}
                        className="bg-red-700 hover:bg-red-800 transition text-white px-6 py-3 rounded-xl w-full md:w-1/2 mx-auto"
                    >
                        SUBMIT
                    </button>

                    <h1 className="text-center text-lg font-semibold">
                        TOTAL TIME : {lineartime} ms
                    </h1>

                    <h1 className="text-center text-lg">
                        RESULT : <span className="text-red-600 font-bold">{result}</span>
                    </h1>

                </div>
            </div>

        
            <div className="shadow-2xl rounded-3xl p-6 md:p-8 bg-white">

                <h1 className="text-xl md:text-3xl text-blue-900 text-center font-semibold">
                    BINARY SEARCH
                </h1>

                <div className="mt-6 overflow-x-auto">
                    <CChart type="bar" data={chartdatabinary} options={options}/>
                </div>

                <div className="mt-6 flex flex-col gap-4">

                    <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                        <input
                            className="w-full md:w-auto p-3 border-2 border-blue-900 rounded-xl"
                            type="number"
                            placeholder="Enter Array Size"
                            onChange={(e)=>setarraysize(e.target.value)}
                        />
                        <button
                            className="bg-green-700 hover:bg-green-800 transition text-white px-6 py-3 rounded-xl"
                            onClick={()=>RandomArray("binarysearch")}
                        >
                            GENERATE
                        </button>
                    </div>

                    <input
                        className="w-full md:w-1/2 mx-auto p-3 border-2 border-blue-900 rounded-xl"
                        type="number"
                        placeholder="Enter Search Element"
                        onChange={(e)=>setbkey(e.target.value)}
                    />

                    <button
                        onClick={Binary}
                        className="bg-red-700 hover:bg-red-800 transition text-white px-6 py-3 rounded-xl w-full md:w-1/2 mx-auto"
                    >
                        SUBMIT
                    </button>

                    <h1 className="text-center text-lg font-semibold">
                        TOTAL TIME : {binarytime} ms
                    </h1>

                    <h1 className="text-center text-lg">
                        RESULT : <span className="text-red-600 font-bold">{result2}</span>
                    </h1>

                </div>
            </div>

        </div>

    </div>
    )
}
export default Compare;