import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import loadable from '@loadable/component';

import Layout from '~/components/common/Layout';
import Home from '~/components/pages/Home';

const Portfolio = loadable(() => import('~/components/pages/Portfolio'));
const PaintDetail = loadable(() => import('~/components/pages/PaintDetail'));

const Routing = (): React.ReactElement => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/paint/:paintPath" component={PaintDetail} />
    </Layout>
  </Router>
);

export default Routing;
