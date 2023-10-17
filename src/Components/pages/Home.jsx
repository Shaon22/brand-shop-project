import { useLoaderData } from "react-router-dom";
import Banner from "../Others/Banner";
import Brands from "../Others/Brands";


const Home = () => {
    const brands=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div>
                {brands.length}
            </div>
           <div className="grid grid-cols-1
            md:grid-cols-2 p-10 gap-10">
           {
                brands.map(brand => <Brands key={brand.id} brand={brand}></Brands>)
            }
           </div>
        </div>
    );
};

export default Home;