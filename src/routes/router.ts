import { Router } from "express";
// import routerOrder from "./order.Routes";
// import routerProduct from "./product.Routes";
// import routerCart from "./productCart.Routes";
// import routerUser from "./user.Routes";
import { routerOrder, routerProduct, routerCart, routerUser} from "./index";

const router = Router();

router.use('/orders', routerOrder);
router.use('/products', routerProduct);
router.use('/cart', routerCart);
router.use('/users', routerUser);

export default router;