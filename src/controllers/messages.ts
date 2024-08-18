import { Request, Response } from "express";
import { messages } from "../constants/constants";

export const allMessages = (req: Request, res: Response) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

export const message = (req: Request, res: Response) => {
  const displayMessage = messages.find((message) => {
    return message.id === parseInt(req.params.userId);
  });

  if (displayMessage) {
    const currentTime = new Date();
    const pastTime = new Date(displayMessage.added);

    const diffInMilliseconds = currentTime.getTime() - pastTime.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);

    let timeText;
    if (diffInMinutes <= 60) {
      timeText = `${diffInMinutes} minutes ago`;
    } else {
      timeText = `${diffInHours} hours ago`;
    }

    res.render("message", {
      title: "Mini Messageboard",
      message: { ...displayMessage, added: timeText },
    });
  } else {
    res.status(404).send("No message found");
  }
};
