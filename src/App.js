import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./component/sidebar/sidebar";
import Layout from "antd/lib/layout/layout";
import Header from './component/header/header';


import Dsxe from "./main/DSxe";
import Dskhachhang from "./main/Dskhachhang";
import AddVehicle from "./main/AddVehicle";

export default function App() {
  return (
    <div>
      <Router>
      <Header/>
      <br/>
      <Sidebar />
        <Switch>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <classname style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <Route exact path="/DSXe">
            <Dsxe/>
          </Route>
          <Route exact path="/Dskhachhang">
            <Dskhachhang/>
          </Route>
          <Route exact path="/AddVehicle">
            <AddVehicle/>
          </Route>
         
        </div>
      </classname>
    </Layout> 
        </Switch>

      </Router>
    </div>
  );
}
