import type { NextApiRequest, NextApiResponse } from "next";
import { mockList } from "@/__mocks__/shows";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Filter shows with rating of 5 (top rated)
    const topRatedShows = mockList.filter((show) => show.rating === "5");
    return res.status(200).json({ shows: topRatedShows });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
