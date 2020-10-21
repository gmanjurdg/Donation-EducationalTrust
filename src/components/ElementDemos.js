import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import RegisterForm from "./RegisterForm";

const ElementDemos = ({ demos }) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="ml-3">
      <div className="row">
      <div className="col"><RegisterForm /></div>
      <div className="col " style={{marginTop:"6rem "}} >
      <h3>Payment Gateway</h3>
      <div className="DemoPickerWrapper ">
        <select
          className="DemoPicker"
          value={location.pathname}
          onChange={event => {
            history.push(event.target.value);
          }}
        >
          {demos.map(({ path, label }) => (
            <option key={path} value={path}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <Switch>
        <Redirect to={demos[0].path} from="/" exact />
        {demos.map(({ path, component: Component }) => (
          <Route key={path} path={path}>
            <div className="Demo">
              <Component />
            </div>
          </Route>
        ))}
      </Switch>
      </div>
    </div>
    </div>
  );
};

export default ElementDemos;
