import { Router } from "express";
import { allMessages, message } from "../controllers/messages";

const indexRouter = Router();

indexRouter.get("/", allMessages);
indexRouter.get("/messages/:userId", message);

export default indexRouter;
