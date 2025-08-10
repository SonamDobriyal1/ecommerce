import express from 'express'
import { placeOrder, placeOrderRazorpay, userOrders, allOrders, updateStatus, verifyRazorpay } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const orderRouter = express.Router()


// admin feature
orderRouter.post('/list', adminAuth, allOrders)

orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place', authUser,  placeOrder)
orderRouter.post('/razorpay', authUser,  placeOrderRazorpay)

// user feature
orderRouter.post('/userorders', authUser, userOrders)

// verify payment
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)


export default orderRouter