import { useEffect, useState } from "react";
const ProductCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log

    return (
        <div className="my-20">
            <h1 className="text-4xl font-bold text-center text-orange-500 my-10">Featured categories</h1>
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-5 justify-around my-10">
          
            {
                categories.map(category=>
                    <div  key={category.id}>
                        <img className="w-[200px] h-[150px]" src={category.catImage} alt="" />
                    </div>)
            }
        </div>
        </div>
    );
};

export default ProductCategory;