import Layout from "../components/Layout";
import { attributes, html } from "../../content/home.md";

const Home = () => (
  <Layout>
    <h1>{attributes.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);

export default Home;
