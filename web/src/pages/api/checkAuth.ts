import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  //   try {
  //     const token = await getToken({ req, secret });
  //     if (token) {
  //       console.log("JSON Web Token", token);
  //     } else {
  //       throw Error("whoa buddy");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   res.end();
  const session = await getSession({ req });
  if (session) {
    res.status(200).send(session);
  } else {
    res.status(401).send("Please Sign In!");
  }
  res.end();
};
