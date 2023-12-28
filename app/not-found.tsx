import Layout from "@/components/Layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Nah I don't have this page.",
};


const notFound = () => (
  <Layout>
    <h1 className="font-mosk text-primary-gray font-bold md:text-[6em] text-[4em] tracking-wider text-center">
      404
    </h1>
    <p className="tracking-wide max-w-5xl md:leading-7 leading-6 text-center block mx-auto">
      The page you are looking for does not exist.
    </p>
  </Layout>
);

export default notFound;