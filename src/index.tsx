import { render } from 'inferno';
import { Incrementer } from './components/Incrementer';
import { App } from './components/Application';

import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
		<Route component={ App }>
      <IndexRoute component={ Incrementer }/>
      <Route path="*" component={ Incrementer }/>
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));
