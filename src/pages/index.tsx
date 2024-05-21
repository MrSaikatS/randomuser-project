import Display from "@/components/Display";
import Nav from "@/components/Nav";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>RandomUser V2 | CIT</title>
      </Head>

      <Nav />

      <section className="container mx-auto max-w-screen-xl">
        <Display />
      </section>
    </>
  );
};

export default index;
