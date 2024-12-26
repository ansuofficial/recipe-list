import { useState } from "react";
import { products } from "./data";

interface Products {
  Description: string;
  Image: string;
  Title?: string;
}

function App() {
  const [product, setproduct] = useState<Products[]>(products);
  const [search, setsearch] = useState("");

  return (
    <>
      <main className="main">
        {/* <div>
          <h1>Recipe Store</h1>
        </div> */}

        <div className="input-con">
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Search for your favorite recipe"
          />
        </div>

        <div className="card-wrapper">
          {product
            .filter((searcedproduct: any) =>
              searcedproduct == ""
                ? searcedproduct
                : searcedproduct.Description.includes(search) || searcedproduct.Title.includes(search)
            )
            .map((product) => {
              return (
                <div className="card">
                  <div className="image-space">
                    <img src={product.Image} alt="" />
                  </div>
                  <p className="product-title">
                    {product.Title}
                  </p>
                  <p className="product-description">{product.Description}</p>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}

export default App;
