import Layout from "../Components/Layout";
import InnerLayout from "../Components/PageInnerLayout";

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
