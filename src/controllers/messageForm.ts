import { Request, Response } from "express";
import { messages } from "../constants/constants";

export const displayMessageForm = (req: Request, res: Response) => {
  res.render("form", { title: "Mini Messageboard" });
};

export const submitForm = (req: Request, res: Response) => {
  const user = req.body.name;
  const text = req.body.messageText;

  messages.push({ text, user, added: new Date(), id: messages.length + 1 });

  res.redirect("/");
};
