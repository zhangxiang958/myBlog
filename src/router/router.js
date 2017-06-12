import React from 'react';
import {
	Route,
	BrowserRouter as Router
} from 'react-router-dom';

// 使用 react 路由懒加载方法：在 route 标签像例子那样写好，并且在前面使用 import 引入所要的组件
import App 	from '../views/App.jsx';
import Blog from '../views/Blog/index.jsx';

const router = (
	<Router>
			<App>
				<Route exact path="/" component={ Blog } />
			</App>
	</Router>
);


export default router;

{/*<Router history= { browserHistory } >*/}
		{/*<Route path="/" component={ App } >*/}
			{/*<IndexRoute component={ Blog } />*/}
			{/*<Route path="/game" component={ game } />*/}
			
			{/*<Route 	path="/" 
					getComponent={ (location, callback) => {
						require.ensure([], (require) => {
							callback(null, require('../views/sendWish/sendWish.jsx').default)
						})} } 
			/>			*/}
			
		{/*</Route>*/}
	{/*</Router>*/}