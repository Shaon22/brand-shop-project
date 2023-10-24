import { useContext, useEffect, useState } from "react";
import { myContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Mycart = () => {
    const { user } = useContext(myContext)
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch(`https://brand-shop-server-3wjz8x9au-shaon-polock-roys-projects.vercel.app/userCart/${user.email}`)
            .then(res => res.json())
            .then(data => setCartItems(data))
    }, [])
    const handledelete=(id)=>{
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`https://brand-shop-server-3wjz8x9au-shaon-polock-roys-projects.vercel.app/deleteCart/${id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
                }
              })
            }
          })
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
            {
                cartItems.map(cartItem =>
                    <div key={cartItem._id} className="card flex-grow bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={cartItem.image} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{cartItem.name}</h2>
                           <h1>{cartItem.price}</h1>
                            <div className="card-actions flex-grow">
                                <button className="btn bg-orange-500 text-white">Buy Now</button>
                                <button onClick={()=>handledelete(cartItem._id)} className="btn bg-orange-500 text-white">Delete</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Mycart;