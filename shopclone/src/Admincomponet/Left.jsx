import { Link } from "react-router-dom";

function Left() {
    return ( 
        <>
        <div className="col-md-3" id="left">
        <button className="btn btn-success mt-2 mb-2 form-control"><Link to='/bannerm'>banner Management</Link></button>
        <button className="btn btn-success mt-2 mb-2 form-control"><Link to='/allcategory'>Product Category Management</Link></button>
            <button className="btn btn-success mt-2 mb-2 form-control"><Link to='/product'>Product Management</Link></button>
            <button className="btn btn-success mt-2 mb-2 form-control"><Link to='/query'>Query Management</Link></button>
           
        </div>
        </>
     );
}

export default Left;