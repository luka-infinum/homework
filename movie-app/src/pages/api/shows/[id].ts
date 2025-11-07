import type { NextApiRequest, NextApiResponse } from "next";
import { mockList } from "@/__mocks__/shows";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;

    const show = mockList.find((item) => item.UUID === id);

    if (!show) {
      return res.status(404).json({ message: "Show not found" });
    }

    return res.status(200).json(show);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
