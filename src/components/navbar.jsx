import {Link} from "react-router-dom"
function Nav(){
    return <div className="flex justify-between mt-7">
        <div>
            <h1>ALGORITHM-INSIGHTS</h1>
        </div>
        <ul className="flex justify-end gap-9">
            <Link to="/search"><li>SEARCHING</li></Link>
            <Link to="/sort"><li>SORTING</li></Link>
            <Link to="/comp"><li>COMPARING</li></Link>
        </ul>
    </div>

}
export default Nav;