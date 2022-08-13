import axios from "axios";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await axios.post(
    `https://tefzon.herokuapp.com/api/auth/google/callback`,
    {
      code: req.query.code,
      scope: req.query.scope,
      authuser: req.query.authuser,
      prompt: req.query.prompt,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (user) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};
