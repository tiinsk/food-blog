import { PageLayout } from '../components/page-layout/page-layout';

const App = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default App;
