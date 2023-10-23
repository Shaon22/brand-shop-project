import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Others/Banner";
import ProductCategory from "../Others/ProductCategory";
import Aftersales from "../Others/Aftersales";

const Home = () => {
    const brands = useLoaderData()
    return (
        <div className="">
            <Banner></Banner>
            <h1 className="text-4xl font-bold text-center text-orange-500 my-5">Featured Brands</h1>
            <div className="
             grid grid-cols-1 bg-gray-100 md:grid-cols-3 p-10 gap-10">
                {
                    brands.map(brand =>
                        <Link key={brand.id} to={`/products/${brand.brand_name}`}>
                            <img data-aos="zoom-in" data-aos-duration="2000" className="p-5 h-[200px] w-[90%] mx-auto" src={brand.brand_img} alt="" />
                        </Link>
                    )
                }
            </div>
            <ProductCategory></ProductCategory>
            <Aftersales></Aftersales>
        </div>
    )

};

export default Home;