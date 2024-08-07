import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Banner from "../components/Home/Banner/Banner";
import ComponentList from "../components/Home/ComponentList/ComponentList";
import Price from "../components/Home/Price/Price";
import DynamicView from "../components/Home/DynamicView/DynamicView";
import UseCase from "../components/Home/UseCase/UseCase";
import UserStories from "../components/Home/UserStories/UserStories";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="flex flex-row  w-full justify-center">
        <div className="flex flex-col gap-2 w-full justify-center 2xl:w-[1280px] xl:w-full">
          <Banner />
          <UseCase />
          <ComponentList />
          <Price />
          <UserStories />
        </div>
      </main>
    </Layout>
  );
}
