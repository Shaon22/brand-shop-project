import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target;
        const image = form.image.value
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const rating = form.rating.value
        const price = form.price.value
        const shortDes = form.shortDes.value
        const newProducts = {
            image, name, brandName, type, rating, price, shortDes
        }
        console.log(newProducts)
        fetch('https://brand-shop-server-3wjz8x9au-shaon-polock-roys-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    form.reset()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center text-orange-500 my-5">Add Products</h1>

            <div className="w-[80%] mx-auto p-10">
                <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-5 ">
                    <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="name" placeholder="Name" id="" />
                    <select className="rounded outline-none border-b-2 focus:border-orange-500 p-2" placeholder="brand" name="brandName" id="">brand
                        <option value="">Brand</option>
                        <option value="Hp">Hp</option>
                        <option value="Asus">Asus</option>
                        <option value="Gigabyte">Gigabyte</option>
                        <option value="Intel">Intel</option>
                        <option value="AMD">AMD</option>
                        <option value="Samsung">Samsung</option>
                    </select>
                    <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="type" placeholder="Product Type" id="" />
                    <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="rating" placeholder="Rating" id="" />
                    <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="price" placeholder="Price" id="" />
                    <input className="rounded outline-none border-b-2 focus:border-orange-500 p-2" type="text" name="image" placeholder="Image URL" id="" />
                    <textarea className="rounded focus:border-orange-500 outline-none border-b-2 col-span-2 p-2 " name="shortDes" placeholder="Short Description" id="" cols="30" rows="10"></textarea>
                    <input className="w-full btn items-center text-white bg-orange-500 col-span-2" type="submit" value="Add
           " />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;