import Layout from "../components/MyLayout";
import { useRouter } from "next/router";

export default function Blog() {
  return (
    <Layout page="Blog">
      <p>This is the blog page.</p>
    </Layout>
  );
}
