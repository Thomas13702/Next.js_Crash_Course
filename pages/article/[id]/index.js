//single article page showing when we click on link due to href being /article/[id]

import { useRouter } from "next/router";

const article = () => {
  const router = useRouter(); //router now contains any parameters that are in the route
  const { id } = router.query; //gets id
  return <div>This is article {id}</div>;
};

export default article;
