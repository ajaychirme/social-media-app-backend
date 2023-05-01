import  express  from "express";
import login from "../controllers/auth.js";
// import { register } from "../controllers/auth.js";

 const router = express.Router();

 router.post("/login", login);
//  router.post("/register", upload.single("picture"),register)

 export default router;