import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from '~/components/common/Layout';

import Home from '~/components/pages/Home';

const Routing = (): React.ReactElement => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </Router>
);

export default Routing;
