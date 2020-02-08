import Layout from "../components/MyLayout";
import { useRouter } from "next/router";

export default function Index() {
  return (
    <Layout>
      <p>this is the index page</p>
      <p>Tell everyone about yourself, Ryan...</p>
      <style jsx>{``}</style>
    </Layout>
  );
}
