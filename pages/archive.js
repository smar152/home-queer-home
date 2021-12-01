import Layout from "../Components/Layout";
import InnerLayout from "../Components/PageInnerLayout";

const content = <div>We're gonna need a bigger boat.</div>;

const ArchivePage = () => {
  return (
    <Layout>
      <InnerLayout title="Archive" three={content} />
    </Layout>
  );
};

export default ArchivePage;
