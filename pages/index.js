import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="key" content="web development, programming" />
      </Head>

      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  ); //gets the data from a "fake" rest api
  const articles = await res.json(); //gives us the data

  return {
    props: {
      articles,
    },
  };
};
