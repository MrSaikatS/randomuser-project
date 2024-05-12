// import Display from "@/components/Display";
// import Nav from "@/components/Nav";

import Head from "next/head";

const index = () => {
  console.log(process.env.NEXT_PUBLIC_APIURL);

  return (
    <>
      <Head>
        <title>RandomUser V2</title>
      </Head>
      {/* <Nav /> */}

      {/* <section className="mx-auto max-w-screen-xl">
        <Display />
      </section> */}
    </>
  );
};

export default index;
