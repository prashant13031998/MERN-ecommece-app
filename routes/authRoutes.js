import express from "express";
import {
  authController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  ordersController,
  allOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//Routing
//Register | Method POST

router.post("/register", authController);

//LOGIN | POST

router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController);

//protected route

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, ordersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, allOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
