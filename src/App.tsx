import {Route, Routes} from "react-router-dom";
import {routes} from "./router";

export const App = () => {
  return (
    <Routes>
      {routes.map(({path, module: Page}) => {
        return <Route key={path} path={path} element={<Page/>}/>
      })}
    </Routes>
  );
}