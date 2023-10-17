
const Brands = ({brand}) => {
    const {id,brand_name,brand_img}=brand
    return (
            <div data-aos="zoom-in"  data-aos-duration="2000" className=" bg-base-100 rounded-2xl shadow-xl">
        <figure><img className="h-[350px] w-[full]" src={brand_img} alt=""/></figure>
          <div className="flex justify-around items-center p-10">
             <h2 className="card-title">{brand_name}</h2>
            <button className="btn btn-primary">Listen</button>
          </div>
         </div> 
       
    );
};

export default Brands;