import { useNavigate } from "react-router-dom";
import Nav from "./navbar";
function Head(){
    const navigate=useNavigate();
    return <div className="mt-50">
        <div>
            <h1 >ALGORITHM INSIGHTS</h1>
            <p>CONTENT OG ALORITHM INSIGHT</p>
        </div>
        <div className="flex gap-9 justify-center mt-20">
            <button onClick={()=>navigate("/sort")} className="bg-blue-800 p-4 text-white rounded-2xl">EXPLORE-SORTING</button>
            <button onClick={()=>navigate("/search")} className="bg-blue-800 p-4 text-white rounded-2xl">EXPLORE-SEARCHING</button>
            <button onClick={()=>navigate("/comp")} className="bg-blue-800 p-4 text-white rounded-2xl">EXPLORE-COMPARING</button>
        </div>
        
    </div>

}
export default Head;