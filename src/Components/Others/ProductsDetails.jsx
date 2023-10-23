import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { myContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const ProductsDetails = () => {
    const details = useLoaderData()
    const { _id, name, image, shortDes, price } = details
    const{user}=useContext(myContext)
    const email=user.email
    const handleAddToCart = (id) => {
        console.log(id,user)
        const newCart={
            id,name,image,shortDes,price,email
        }
        fetch('http://localhost:5000/userCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product added to cart successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div className="w-[80%] text-center mx-auto p-5 my-5
        bg-base-200">
            <div>
                <img src={image} className="w-[350px] h-[350px] mx-auto rounded-lg shadow-2xl my-5" />
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p>{shortDes}</p>
                    <h1 className="text-base font-bold">Price: {price}</h1>
                    <button onClick={() => handleAddToCart(_id)} className="btn  bg-orange-500 text-white mr-5">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;