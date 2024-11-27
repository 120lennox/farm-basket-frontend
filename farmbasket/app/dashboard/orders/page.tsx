"use client";
import { useState, useEffect } from "react";

interface Order {
  id: string;
  customer: string;
  product: string;
  quantity: string;
  price: string;
  date: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const fakeOrders: Order[] = [
        {
          id: "0001",
          customer: "Lennox Mountain",
          product: "Maize",
          quantity: "3 Bags",
          price: "MK120,000",
          date: "12 November 2024",
        },
        {
          id: "0002",
          customer: "Martha Fields",
          product: "Wheat",
          quantity: "2 Bags",
          price: "MK80,000",
          date: "15 November 2024",
        },
      ];
      setOrders(fakeOrders);
    };

    fetchOrders();
  }, []);

  const handleDelete = (orderId: string) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    console.log(`Order ${orderId} deleted.`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen py-8 px-4 overflow-y-auto">
      <h1 className="text-3xl font-bold text-black mb-8">Orders</h1>
      <div className="w-full max-w-5xl">
        {orders.length > 0 ? (
          <div className="grid grid-cols-6 gap-4 text-left text-black">
            <div className="font-bold">Order</div>
            <div className="font-bold">Customer</div>
            <div className="font-bold">Product</div>
            <div className="font-bold">Quantity</div>
            <div className="font-bold">Price</div>
            <div className="font-bold">Date</div>

            {orders.map((order) => (
              <>
                <div key={`order-${order.id}`}>{order.id}</div>
                <div>{order.customer}</div>
                <div>{order.product}</div>
                <div>{order.quantity}</div>
                <div>{order.price}</div>
                <div>
                  {order.date}{" "}
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-500 hover:underline ml-2"
                  >
                    Delete
                  </button>
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-black">No orders made yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
