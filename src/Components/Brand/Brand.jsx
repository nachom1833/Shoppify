import { NavLink } from "react-router-dom";
import "../Brand/Brand.css";

function Brand(){
    return(
<div className="Brand">
<NavLink to={`/`} className={"Brand"}>
    <h1>Shopp</h1>
    </NavLink>
</div>
    );
}
export default Brand;