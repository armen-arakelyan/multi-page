import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  basketCounterRemove,
  basketOrderRemove,
  basketAllPriceRemove,
} from "../redux/basket/action";

const Basket = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.counter);
  const orders = useSelector((state) => state.count.orders);
  const all_price = useSelector((state) => state.count.all_count);

  return (
    <div style={{ display: props.display }} className="basket-menu">
      <div className="basket-content">
        <div className="basket-bg">
          <div onClick={props.close} className="close-menu">
            <p>&#10006;</p>
          </div>
          <div className="basket-header">
            <h2>{count} orders</h2>
          </div>
          <div className="basket-orders">
            <div className="basket-orders-content">
              {orders.map((v, i) => (
                <span className="basket-orders-content-txt" key={i}>
                  <p>
                    {v.name}:{v.price}
                  </p>
                  <span
                    onClick={() => {
                      if (count !== 0) {
                        dispatch(basketCounterRemove(count));
                        dispatch(basketAllPriceRemove(v.price));
                        dispatch(basketOrderRemove(v));
                      }
                    }}
                  >
                    &#10006;
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="basket_price">
            {all_price === 0 ? (
              ""
            ) : (
              <div className="order_page">
                <span>Price:{all_price}$</span>
                <a href="/order">
                  <button
                    onClick={() => {
                      localStorage.setItem("orders", JSON.stringify(orders));
                      localStorage.setItem(
                        "all_price",
                        JSON.stringify(all_price)
                      );
                    }}
                  >
                    TO THE BASKET
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
