import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Order = () => {
  const [orderBlock, setOrderBlock] = useState("none");
  const [orders_data, setOrdersData] = useState(
    JSON.parse(localStorage.getItem("orders"))
  );
  const [allPrices, setAllPrices] = useState(localStorage.getItem("all_price"));
  const [submit, setSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderPost = (data) => {
    axios
      .post("http://localhost:9000/order", data)
    setSubmit(!submit)
    setOrderBlock('flex')
  };

  useEffect(() => {
    if (localStorage.getItem("orders") === null) {
      setOrdersData(null);
    }
    if (submit) {
      localStorage.removeItem("orders");
      localStorage.removeItem("all_price");
    }
  });
  return (
    <div>
      <div style={{ display: orderBlock }} className="basket-menu">
        <div className="basket-content">
          <div className="basket-bg">
            <div className="basket-header">
              <h2>Order</h2>
            </div>
            <div className="basket-orders">
              <div className="basket-orders-content">
                <span className="basket-orders-content-txt">
                  <em>Your order has been sent </em>
                </span>
              </div>
              <div className="basket_price">
                <div className="order_page">
                  <a href="/">
                    <button onClick={() => {}}>OKEY</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="break"></div>
      {orders_data === null ? (
        <h1>Empty</h1>
      ) : (
        <div className="order_page_basket">
          <table>
            <thead>
              <th>Name</th>
              <th>Price</th>
            </thead>
            <tbody>
              {orders_data.map((v, i) => (
                <tr key={i}>
                  <td>{v.name}</td>
                  <td>{v.price}$</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <th colSpan="5">Total:{allPrices}$</th>
            </tfoot>
          </table>
          <form className="send_order" onSubmit={handleSubmit(orderPost)}>
            <h2>Order</h2>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {errors.name && "Write your name in the field"}
            <input
              {...register("contact", { required: true })}
              placeholder="Contact"
            />
            {errors.name && "Write your contact in the field"}
            <input
              {...register("adress", { required: true })}
              placeholder="Adress"
            />
            {errors.name && "Write your adress in the field"}
            <input
              type="hidden"
              {...register("orders")}
              defaultValue={JSON.stringify(orders_data)}
            />
            <input
              type="hidden"
              {...register("myprice")}
              defaultValue={allPrices}
            />
            <button type="submit" className="btn">
              Buy
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Order;
