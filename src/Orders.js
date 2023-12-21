import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./Stateprovider";
import { db } from "./firebase";
// import Order from './Order'
import Order from "./Order";

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		console.log(user);
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);
	console.log("Orders", user);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders__order">
				{orders?.map((order, id) => (
					<Order key={id} order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
