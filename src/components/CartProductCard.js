import { useCart } from "../context/CartProvider";
import { useAuth } from "../context/AuthProvider";

export function CartProductCard({ product, quantity }) {
  const {
    handleRemoveFromCart,
    handleMoveToWishlist,
    handleIncrementQuantity,
    handleDecrementQuantity
  } = useCart();
  const {
    authState: { currentUser }
  } = useAuth();

  return (
    <div
      className="card-horizontal-container"
      style={{ margin: "0.5rem auto" }}
    >
      <div className="card-horizontal-block">
        <img
          src={product.imgUrl}
          className="card-horizontal-img"
          alt="card-img"
        />

        <div className="card-horizontal-block-detail">
          <div>
            <div className="card-block-detail-title">{product.brandName}</div>

            <div className="card-block-detail-txt ">{product.name}</div>

            <div className="card-block-detail-info ">
              &#8377;{" "}
              {product.isDiscounted
                ? product.effectivePrice
                : product.actualPrice}
              {product.isDiscounted ? (
                <span
                  className="txt-line-through"
                  style={{ opacity: "0.6", marginLeft: "0.5rem" }}
                >
                  {" "}
                  &#8377; {product.actualPrice}
                </span>
              ) : null}
            </div>
          </div>

          <div className="cart-card-counter">
            <button
              className="btn-counter"
              onClick={() => {
                if (quantity === 1) {
                  handleRemoveFromCart({
                    userId: currentUser._id,
                    productId: product._id
                  });
                } else {
                  handleDecrementQuantity({
                    userId: currentUser._id,
                    productId: product._id
                  });
                }
              }}
            >
              {" "}
              -{" "}
            </button>
            <div className="card-counter-num"> {quantity} </div>
            <button
              className="btn-counter"
              onClick={() => {
                handleIncrementQuantity({
                  userId: currentUser._id,
                  productId: product._id
                });
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="card-bottom">
        <button
          className="card-btn"
          style={{ backgroundColor: "#F87171" }}
          onClick={() => {
            handleRemoveFromCart({
              userId: currentUser._id,
              productId: product._id
            });
          }}
        >
          REMOVE
        </button>
        <button
          className="card-btn"
          style={{ backgroundColor: "#404040" }}
          onClick={() => {
            handleMoveToWishlist({
              userId: currentUser._id,
              productId: product._id
            });
          }}
        >
          MOVE TO WISHLIST
        </button>
      </div>
    </div>
  );
}
