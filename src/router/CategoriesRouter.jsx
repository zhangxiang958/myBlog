import React            from 'react';
import { Route, Link }  from 'react-router-dom';
import Categories       from '../views/Categories/index.jsx';
import PostOfTag        from '../views/Archives/PostOfTag/index.jsx';


const CategoriesRouter = ({ match }) => (
  <div>
    <Route exact path={match.url} render={() => (
      <Categories match={match}/>
    )}/>
    <Route path={`${match.url}/:tag`} component={PostOfTag}/>
  </div>
);

export default CategoriesRouter;