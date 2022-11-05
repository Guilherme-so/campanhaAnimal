// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dogs } from "../../../dogs";
export default (req, res) => {
  res.status(200).json(dogs);
};
