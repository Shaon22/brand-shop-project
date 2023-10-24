
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
    const addedproduct = useLoaderData()
    console.log(addedproduct)
    const {_id, brandName, name, image, type, price, rating, shortDes } = addedproduct
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const image = form.image.value
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const rating = form.rating.value
        const price = form.price.value
        const shortDes = form.shortDes.value
        const updatedProducts = {
            image, name, brandName, type, rating, price, shortDes
        }
        console.log(updatedProducts)

        fetch(`https://brand-shop-server-3wjz8x9au-shaon-polock-roys-projects.vercel.app/category/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProducts)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    form.reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center text-orange-500 my-5">update Products</h1>
                <div className="w-[80%] mx-auto p-10">
                    <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-5 ">
                        <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="name" placeholder="Name" defaultValue={name} id="" />
                        <select className="rounded outline-none border-b-2 focus:border-orange-500 p-2" placeholder="brand" name="brandName" defaultValue={brandName} id="">brand
                            <option value="">Brand</option>
                            <option value="Hp">Hp</option>
                            <option value="Asus">Asus</option>
                            <option value="Gigabyte">Gigabyte</option>
                            <option value="Intel">Intel</option>
                            <option value="AMD">AMD</option>
                            <option value="Samsung">Samsung</option>
                        </select>
                        <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="type" placeholder="Product Type" defaultValue={type} id="" />
                        <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="rating" placeholder="Rating" defaultValue={rating} id="" />
                        <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="price" placeholder="Price" defaultValue={price} id="" />
                        <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="image" placeholder="Image URL" defaultValue={image} id="" />
                        <textarea className="rounded focus:border-orange-500 outline-none border-b-2 col-span-2 p-2 " name="shortDes" placeholder="Short Description" id="" defaultValue={shortDes} cols="30" rows="10"></textarea>
                        <input className="w-full btn items-center text-white bg-orange-500 col-span-2" type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default UpdateProducts;