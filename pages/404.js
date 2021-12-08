import Layout from "../Components/Layout/Layout";
import InnerLayout from "../Components/Layout/PageInnerLayout";

// pages/404.js
export default function Custom404() {
  return (
    <Layout>
      <InnerLayout
        title="Error 404"
        three={<div>What were you looking for?</div>}
      />
    </Layout>
  );
}
