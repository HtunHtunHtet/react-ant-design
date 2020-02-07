import React,{Component} from 'react';
import '../App.css';
import MenuHeader from './MenuHeader';
import Banner from './Banner';
import Notification from "./Notification";
import {  Layout  } from 'antd';
import HighLight from "./HighLight";


/**Constants **/
const { Footer } = Layout;

class App extends Component {
    render () {
        return(
            <div>

                <Notification/>

                <Layout className="layout smoke-grey">

                    {/*Header*/}
                    <MenuHeader/>

                    {/*Banners*/}
                    <Banner/>

                    {/*HighLight*/}
                    <HighLight/>


                    {/*Footer*/}
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }

}

export default App;