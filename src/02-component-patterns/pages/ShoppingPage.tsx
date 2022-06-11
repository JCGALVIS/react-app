import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product: Product = {
  id: "1",
  img: "./coffee-mug.png",
  title: "Coffe Mug",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" title={"Cafe"} />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard className="bg-dark text-white" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard style={{ backgroundColor: "#70d1f8" }} product={product}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>

        <ProductCard style={{ backgroundColor: "#70d1f8" }} product={product}>
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductCard.Title style={{ fontWeight: "bold" }} title={"Cafe"} />
          <ProductCard.Buttons
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
