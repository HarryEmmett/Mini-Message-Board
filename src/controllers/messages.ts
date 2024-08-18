import { Request, Response } from "express";
import { messages } from "../constants/constants";

export const allMessages = (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

export const message = (req: Request, res: Response) => {
  const displayMessage = messages.find((message) => {
    return message.id === parseInt(req.params.userId);
  });
  res.render("message", {
    title: "Mini Messageboard",
    message: displayMessage,
  });
};
