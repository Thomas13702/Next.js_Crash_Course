//single article page showing when we click on link due to href being /article/[id]
import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  //const router = useRouter(); //router now contains any parameters that are in the route
  //const { id } = router.query; //gets id
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

//Data fetching method next js provides to pages
// get server side props will fetch data at time of request

export const getServerSideProps = async (context) => {
  //context can be used to get ID from URL
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  ); //get individual post

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
