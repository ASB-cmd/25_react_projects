import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disablebutton, setdiablebutton] = useState(false);

  async function fetchProducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );

      const result = await response.json();

      if (result && result.products.length && result.products.length) {
        setproducts((prevData) => [...prevData, ...result.products]);
        setloading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setdiablebutton(true);
    }
  }, [products]);
  if (loading) {
    return <div>Loading Data please await</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disablebutton} onClick={() => setcount(count + 1)}>
          Load more product
        </button>
        {disablebutton ? <p>You have reach 100 products</p> : null}
      </div>
    </div>
  );
}
