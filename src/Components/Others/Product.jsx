import { Link } from "react-router-dom";

const Product = ({addedproduct}) => {
    const{_id,brandName,name,image,type,price,rating}=addedproduct
    return (
        <div className="w-[90%] mx-auto p-5 my-5
          bg-base-200">
  <div className="flex gap-5 flex-col lg:flex-row">
    <img  src={image} className="w-[250px] h-[250px] rounded-lg shadow-2xl" />
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-base font-bold">Brand: {brandName}</h1>
      <h1 className="text-base font-bold">Type: {type}</h1>
      <h1 className="text-base font-bold">Price: {price}</h1>
      <h1 className="text-base font-bold">Ratings: {rating}</h1>
     <Link addedproduct={addedproduct} to={`/productDetails/${_id}`}> <button  className="btn mt-5 bg-orange-500 text-white mr-5">Details</button></Link>
      <Link to={`/updateProducts/${_id}`}><button className="btn bg-orange-500 text-white ">Update</button></Link>
    </div>
  </div>
</div>
        
    );
};

export default Product;