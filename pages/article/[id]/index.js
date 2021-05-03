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

// export const getServerSideProps = async (context) => {
//   //context can be used to get ID from URL
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   ); //get individual post

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// Dynamically generating paths to data
//fetched at build time
export const getStaticProps = async (context) => {
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

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //get all artciles

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  //creating an array of id for each article

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  //maps through ids and returns then in a format like params: { id: "1", id: "2" } does this for every article

  return {
    paths,
    fallback: false, //if we go to data that doesnt exist will return a 404
  };
};

export default article;
