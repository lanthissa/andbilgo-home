import type { NextPage } from "next";
import Head from "next/head";
import { getParsedType } from "zod";
import { trpc } from "../utils/trpc";
import DisplayCard from "../components/DisplayCard";


const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const firstUser = trpc.useQuery(["user.first"]);
  return (
    <>
      <Head>
        <title>Andrew Bilgore&apos;s Site</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center p-4 ">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-poimandres-body-text">
        Andrew Bilgore
        </h1>
        <div className="pt-6 text-2xl text-poimandres-detail-text flex justify-center items-center w-full">
          {firstUser.data ? <p> Created at: {firstUser.data.createAt.toString()}</p> : <p>Loading..</p>}
        </div>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <DisplayCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <DisplayCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <DisplayCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
          <DisplayCard
            name="tRPC"
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
          />
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;
