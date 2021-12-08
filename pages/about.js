import Layout from "../Components/Layout/Layout";
import InnerLayout from "../Components/Layout/PageInnerLayout";

const AboutPage = () => {
  return (
    <Layout>
      <InnerLayout
        title="About"
        three={<div>So, long story short, I'm Smar.</div>}
      />
    </Layout>
  );
};

export default AboutPage;
