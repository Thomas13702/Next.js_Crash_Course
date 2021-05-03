import { articles } from "../../../data";

export default function handler(req, res) {
  const id = req.query.id;
  //filer out artcile we want
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]); //if something in filtered then get first item of array
  } else {
    res.status(404).json({ message: `Article with the id of ${id} not found` });
  }
}
