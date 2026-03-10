import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Search from "./Search";

const Products = () => {

  const [products,setProducts]=useState([]);
  const [filtered,setFiltered]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error, setError]=useState(null);
  const navigate=useNavigate();

  const gotoProduct=(prodObj)=>{
    navigate("/product", { state:{product:prodObj}});
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const handleSearch = (searchType, value) => {
    if (!value) {
      setFiltered(products);
      return;
    }

    let result = [];

    if (searchType === "title") {
      result = products.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (searchType === "price") {
      result=products.filter(
        p=>p.price<=Number(value)
      )}

    if(searchType=="category"){
      result=products.filter(p =>
        p.category.toLowerCase().includes(value.toLowerCase())
      )}
    setFiltered(result);
  }

  if (loading) return <p className="text-center text-2xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div>
      <Search handleSearch={handleSearch} />

      {filtered.length==0 ? (
        <h1 className="text-center bg-amber-600 mt-5">
          No products Found
        </h1>
      ):(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              onClick={()=>gotoProduct(prod)}
              className="p-4 border rounded cursor-pointer">
              <img
                src={prod.image}
                alt={prod.title}
                className="h-40 object-contain mx-auto"/>
              <p className="mt-2 text-center font-semibold">
                {prod.title}
              </p>
              <p className="text-center text-green-600">
                ${prod.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;