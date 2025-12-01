import type { NextApiRequest, NextApiResponse } from "next";
import { mockList } from "@/__mocks__/shows";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ shows: mockList });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
