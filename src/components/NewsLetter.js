import React, {Component} from "react";
import {Layout, Typography, Form, Input, Button, Col, Row} from "antd";
import moment from "moment";
import $ from 'jquery';
const { Title } = Typography;
const {  Content } = Layout;

class NewsLetter extends Component  {

    state = {
        lock: false,
        position: window.pageYOffset, //position:0 indicate view port top , position: 1 indicate it reached vew port bottom
        closeTime: null,
        tenMinTime: null,
    }


    handleSubmit =(e) => {
        e.preventDefault();
        //future submit handler
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)

        //every second check
        window.setInterval(()=> {

            let closeTime   = this.state.closeTime;
            let tenMinTime  = this.state.tenMinTime;
            let currentTime = new moment();

            if( closeTime !== null && tenMinTime !== null  && (currentTime > tenMinTime) ){
                $(".newsletter-holder").removeClass('slideOutDown');
                $(".newsletter-holder").addClass('slideUpBottom');

            }

        },1000)
    }

    listenToScroll = () => {

        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        if(scrolled > 0.3 ) {
            this.setState({
                position: scrolled,
                lock: true
            })
        }else {
            this.setState({
                position: scrolled,
            })
        }
    }

    handleClick = (e) => {
        e.preventDefault();

        let currentTime = new moment();
        //let nextTenMin  = new moment().add(10,'minutes');
        let nextTenMin  = new moment().add(5,'seconds');

        $(".newsletter-holder").removeClass('slideUpBottom');
        $(".newsletter-holder").addClass('slideOutDown')
        this.setState(()=>({ closeTime: currentTime , tenMinTime: nextTenMin}))

    }

    render() {

        let holderClass = 'newsletter-holder slideOutDown';

        const { lock, position} = this.state;

        if (position>0.3) {
            holderClass = 'newsletter-holder slideUpBottom';
        }else {
            if (lock){
                holderClass = 'newsletter-holder slideUpBottom';
            }
        }

        return (
           <div className={holderClass}>
               <a href={'#'} style={{color:"white", float: 'right'}} onClick={this.handleClick}>x</a>
               <Title level={4} style={{color:'white'}}>Get latest updates in web technologies</Title>
               <Content>
                   I write articles related to web technologies, such as design trends, development
                   tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                   them all.
               </Content>

               <Form onSubmit={this.handleSubmit}>
                   <Row gutter={[16, 0]} >
                       <Col md={19} sm={24} xs={24}>
                           <Form.Item style={{ marginBottom: "0px" }}>
                               <Input type={'email'}  placeholder="Email Address" required={'required'} />
                           </Form.Item>
                       </Col>

                       <Col md={5} sm={24} xs={24}>
                           <Form.Item style={{ marginBottom: "0px" }}>
                               <Button  htmlType="submit" className={"orange-button"} block >
                                   Count me in!
                               </Button>
                           </Form.Item>
                       </Col>
                   </Row>

               </Form>
           </div>
        )
    }
}

export default NewsLetter