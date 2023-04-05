import app from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

app().get((_: NextApiRequest, res: NextApiResponse) => {
  res.json({
    message: "Hello World!",
  });
});

export default app;
