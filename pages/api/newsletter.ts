import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body;
    const email: string = body.email;
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid email address" });
    }
    console.log(email);
    return res.status(201).json({ data: body });
  }
}
