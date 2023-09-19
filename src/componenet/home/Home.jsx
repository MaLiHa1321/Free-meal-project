import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../categorie/Categories";


const Home = () => {
    const data = useLoaderData();
   const getdata =  data.categories;
  
  
    return (
        <div>
            <h1 className='text-3xl font-bold'>Free meal resturent</h1>
            <Outlet />
            <div className="grid grid-cols-3 md:grid-cols-5 gap-12 m-12">
            {
               getdata.map(getData => <Categories key={getData.id} getData={getData}></Categories>)
            }

            </div>
           
        </div>
    );
};

export default Home;