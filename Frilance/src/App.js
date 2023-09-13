import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions/app.actions';
import PublicRoutes from './route/PublicRoutes';
import PrivateRoutes from './route/private.routes';
import './index.css';

function App({ history }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(actions.userInfo());
    }
  }, [isAuthenticated, dispatch]);
  if (isAuthenticated) {
    return <PrivateRoutes history={history} />;
  } else {
    return <PublicRoutes history={history} />;
  }
}
App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default App;
