import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import {useEffect, useState } from "react";
const Products = () => {
    const [addedproducts, setAddedproducts] = useState()
    useEffect(() => {
        fetch(`https://brand-shop-server-3wjz8x9au-shaon-polock-roys-projects.vercel.app/products/${brand_name}`)
            .then(res => res.json())
            .then(data => setAddedproducts(data))
    }, [])
    const loadedProducts = useLoaderData()
    const { brand_name } = useParams()
    const product = loadedProducts.find(product => product.brand_name === brand_name)

    return (
        <div className="p-10">
            <div className="carousel border-red-500 ml-16 w-[90%] h-[500px] mx-auto ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={product.add_image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-white">❮</a>
                        <a href="#slide2" className="text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={product.add_image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-white">❮</a>
                        <a href="#slide3" className="text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={product.add_image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-white">❮</a>
                        <a href="#slide4" className="text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={product.add_image4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="text-white">❮</a>
                        <a href="#slide1" className="text-white">❯</a>
                    </div>
                </div>
            </div>

            {
                addedproducts?.map(addedproduct => <Product key={addedproduct._id} addedproduct={addedproduct}></Product>)
            }
        </div >
    );
};

export default Products;