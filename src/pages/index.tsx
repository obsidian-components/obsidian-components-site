import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Banner from "../components/Home/Banner/Banner";
import ComponentList from "../components/Home/ComponentList/ComponentList";
import Price from "../components/Home/Price/Price";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main className="flex flex-row  justify-center p-8">
        <div className="lg:w-[1024px] md:w-full flex flex-col gap-8">
          <Banner />
          <div className="shadow-lg rounded-md border">
            <img
              src={"./img/project-management.png"}
              className="w-full h-full rounded-md"
            />
          </div>
          <ComponentList />
          <Price />
          {/* <UseCase /> */}
          {/* <DynamicView /> */}
        </div>
      </main>
    </Layout>
  );
}
