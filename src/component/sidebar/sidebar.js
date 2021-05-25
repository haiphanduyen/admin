import React, {  } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import { Menu } from "antd";

export default function Sidebar() {
  const history = useHistory()
  const changeLink=(url)=>{
    history.push(url)
  }

  return (
    <className
      style={{
        overflow: "auto",
        height: "300vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>  
          <Menu.Item onClick={()=>changeLink("/DSXe")}>
            Danh sách xe
          </Menu.Item>
        <Menu.Item>
        Doanh thu
        </Menu.Item>
        <Menu.Item  onClick={()=>changeLink("/Dskhachhang")}>Danh sách customer</Menu.Item>
        <Menu.Item>Form chỉnh sửa thông tin</Menu.Item>
        <Menu.Item onClick={()=>changeLink("/AddVehicle")}>
          Form thêm xe
          </Menu.Item>
        <Menu.Item>Tra cứu thông tin</Menu.Item>
      </Menu>
    </className>
  );
}
