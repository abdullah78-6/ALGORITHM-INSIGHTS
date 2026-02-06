import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
    return (
    <div className="flex justify-between items-center px-6 md:px-10 py-4 bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg">
      

      <div>
        <h1
          className="text-xl md:text-2xl font-bold text-white tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          ALGORITHM<span className="text-blue-300">-INSIGHTS</span>
        </h1>
      </div>


      <ul className="hidden lg:flex gap-10 text-blue-100 font-semibold">
        <Link to="/search">
          <li className="cursor-pointer hover:text-white hover:border-b-2 border-blue-300 transition-all duration-300">
            SEARCHING
          </li>
        </Link>

        <Link to="/sort">
          <li className="cursor-pointer hover:text-white hover:border-b-2 border-blue-300 transition-all duration-300">
            SORTING
          </li>
        </Link>

        <Link to="/comp">
          <li className="cursor-pointer hover:text-white hover:border-b-2 border-blue-300 transition-all duration-300">
            COMPARE-SEARCHING
          </li>
        </Link>
      </ul>

    </div>
  );
}

export default Nav;
