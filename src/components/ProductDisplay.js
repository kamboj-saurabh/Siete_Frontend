import { ShowProducts } from "./ShowProducts";
import { useWindowSize } from "../context/useWindowSize";
import { ShowProductsInDesktop } from "./ShowProductsInDesktop";
import { ProductOperations } from "./ProductOperations";

export function ProductDisplay() {
  const [, width] = useWindowSize();

  return (
    <div>
      <div style={{ minHeight: "100vh" }}>
        {width <= 600 ? <ShowProducts /> : <ShowProductsInDesktop />}
      </div>
      {width <= 600 && <ProductOperations />}
    </div>
  );
}
