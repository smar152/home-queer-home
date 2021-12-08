import Layout from "../Components/Layout/Layout";
import InnerLayout from "../Components/Layout/PageInnerLayout";

const NewReadersPage = () => {
  return (
    <Layout>
      <InnerLayout
        title="New Readers"
        three={<div>This comic is about three friends</div>}
      />
    </Layout>
  );
};

export default NewReadersPage;
