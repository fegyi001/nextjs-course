import { NextApiRequest, NextApiResponse } from "next";

import { Comment } from "@/interfaces/comment.interface";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (!email || !name || !text) {
      return res.status(422).json({ message: "Invalid input" });
    }
    const newComment: Comment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    return res
      .status(201)
      .json({ message: "Added comment", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList: Comment[] = [
      {
        id: "c1",
        email: "asdfas@asdfas.com",
        name: "Fegyi",
        text: "My comment",
      },
      {
        id: "c2",
        email: "asdfasdfasdf@adsfads.com",
        name: "Fici",
        text: "My other comment",
      },
    ];
    return res.status(200).json({ comments: dummyList });
  }
}
