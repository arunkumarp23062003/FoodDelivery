import express from 'express';
import { OrderModel } from '../../database/allModels';

const Router = express.Router();
Router.use(express.json());

/*
Route:/
Descript:get all the orders based on user id
Params::_id
Access:public
Method:get
*/

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        const getOrders = await OrderModel.findOne({ user: _id });

        if (!getOrders) {
            return res.json({ error: "users not found" });
        }
        return res.status(200).json({ message: "Users found" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

/*
Route:/new
Descript:add new order
Params:_id
Access:public
Method:post
*/

Router.post("/new", async (req, res) => {
    try {
        const { email, finalItem, deliveryAddress, deliveryPhoneNumber, status, totalItem, totalAmount, cartItem } = req.body;

        // Find the user
        let userOrder = await OrderModel.findOne({ 'user.email': email });

        // If the user doesn't exist, create a new user
        if (!userOrder) {
            userOrder = await OrderModel.create({
                user: { email: email },
                orderDetails: [],
                orderRating: 0, // Add any default value for orderRating
            });
        }
        console.log(cartItem);
        // Add the new order details to the user's orderDetails array
        finalItem.cartItem.forEach(async (Item) => {
            const orderDetails = {
                food: Item.fetchedItem._id,
                quantity: Item.itemTotal,
                paymode: "Prepaid",
                status: status,
                deliveryAddress: deliveryAddress,
                deliveryPhoneNumber: deliveryPhoneNumber,
                paymentDetails: { totalItem: totalItem, totalAmount: totalAmount }
            };

            // Push the new orderDetails to the orderDetails array
            userOrder.orderDetails.push(orderDetails);
        });

        // Save the changes to the user's order
        await userOrder.save();

        return res.json({ order: userOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;