import { NavLink } from "react-router-dom";


const Categories = ({getData}) => {
    
    const {strCategory} = getData;
    return (
        <div>
            <NavLink><button className="btn bg-green-800 text-white p-3 rounded-lg
            ">{strCategory}</button></NavLink>
            
        </div>
    );
};

export default Categories;