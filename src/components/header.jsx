import { useNavigate } from "react-router-dom";
import Nav from "./navbar";
function Head(){
    const navigate=useNavigate();
    return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10">
      
      
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
          ALGORITHM INSIGHTS
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Algorithm Insight is an interactive learning platform designed to help
          students understand how algorithms work step by step through
          visualization, animation, and real-time execution.
          <br /><br />
          Instead of only reading code, users can see algorithms in action,
          making learning faster and more intuitive.
        </p>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-6 mt-12">
        <button
          onClick={() => navigate("/sort")}
          className="bg-blue-800 px-6 py-4 text-white rounded-2xl hover:bg-blue-900 transition-all duration-300 w-64"
        >
          EXPLORE SORTING
        </button>

        <button
          onClick={() => navigate("/search")}
          className="bg-blue-800 px-6 py-4 text-white rounded-2xl hover:bg-blue-900 transition-all duration-300 w-64"
        >
          EXPLORE SEARCHING
        </button>

        <button
          onClick={() => navigate("/comp")}
          className="bg-blue-800 px-6 py-4 text-white rounded-2xl hover:bg-blue-900 transition-all duration-300 w-64"
        >
           COMPARE SEARCHING
        </button>
      </div>
    </div>
  );

}
export default Head;