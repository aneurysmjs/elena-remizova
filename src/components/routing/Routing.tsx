import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import loadable from '@loadable/component';

import Layout from '~/components/common/Layout';
import Home from '~/components/pages/Home';

const Portfolio = loadable(() => import('~/components/pages/Portfolio'));

const Routing = (): React.ReactElement => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Layout>
  </Router>
);

export default Routing;
