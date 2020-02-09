import React,{Component} from 'react';
import '../App.css';
import MenuHeader from './MenuHeader';
import Banner from './Banner';
import Notification from "./Notification";
import {  Layout  } from 'antd';
import HighLight from "./HighLight";
import NewsLetter from "./NewsLetter";


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

                    <NewsLetter/>

                    {/*Footer*/}
                    <Footer style={{ textAlign: 'center' ,backgroundColor: '#004a75' , color:'white' }}>
                        &#169; Htun Htun Htet, All rights reserved
                    </Footer>
                </Layout>
            </div>
        )
    }

}

export default App;