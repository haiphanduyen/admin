import React from 'react'
import { Layout, Menu  } from 'antd';

const { Header } = Layout;

export default function header() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
 
        </Menu>
      </Header>
    )
}
