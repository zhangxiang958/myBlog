import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router
} from 'react-router-dom';

// 使用 react 路由懒加载方法：在 route 标签像例子那样写好，并且在前面使用 import 引入所要的组件
import App 				from '../views/App.jsx';
import Blog 			from '../views/Blog/index.jsx';
import Archives 	from '../views/Archives/index.jsx';
import Categories from '../views/Categories/index.jsx';

const router = (
	<Router>
			<App>
					<Switch>
						<Route exact path="/" component={ Blog } />
						<Route path="/archives" component={ Archives } />
						<Route path="/categories" component={ Categories } >
							<Route path="/:tag" component={ Blog } />
						</Route>						
					</Switch>
			</App>
	</Router>
);


export default router;