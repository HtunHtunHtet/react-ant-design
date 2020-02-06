import React,{Component} from 'react';
import '../App.css';
import MenuHeader from './MenuHeader';
import Banner from './Banner';
import Notification from "./Notification";

import {  Layout  } from 'antd';


/**Constants **/
const {  Content, Footer } = Layout;

class App extends Component {
    render () {
        return(
            <div>

                <Notification/>


                <Layout className="layout">

                    {/*Header*/}
                    <MenuHeader/>

                    {/*Banners*/}
                    <Banner/>

                    {/*Content*/}
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                    </Content>

                    {/*Footer*/}
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }

}

export default App;