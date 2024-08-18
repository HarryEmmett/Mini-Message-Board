import { Router } from "express";
import { displayMessageForm, submitForm } from "../controllers/messageForm";

const newMessageRouter = Router();

newMessageRouter.get("/", displayMessageForm);
newMessageRouter.post("/", submitForm);

export default newMessageRouter;
