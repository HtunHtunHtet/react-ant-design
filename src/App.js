import React from 'react';
import './App.css';
import banner from  './images/banner.jpg';
import logo from './images/logo.png';
import { Menu, Layout,Carousel  } from 'antd';
const {  Content, Footer } = Layout;


const App = () => (
    <div>
        <Layout className="layout">
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['4']}
                style={{
                    lineHeight: '64px',
                    backgroundColor: 'transparent',
                    position: "absolute",
                    zIndex: 1

                }}
            >

                <Menu.Item className={"logo-container"}>
                    <img src={logo} alt="logo" style={{
                        width: 40,
                        borderBottom: 0
                    }}/>
                </Menu.Item>
            </Menu>

            <Carousel>
                <div className={'banner-container'}>
                    <div className={"banner-overlay"} />
                    <img src={banner}  alt="banner" />
                </div>
            </Carousel>

            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>,
    </div>
);

export default App;