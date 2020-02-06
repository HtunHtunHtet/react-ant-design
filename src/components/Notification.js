import {Button, Col, Layout, Row} from "antd";
import React, {Component} from "react";



class Notification extends Component  {

    state = {
        notify: true,
    };

    handleClick = (e) => {
        this.setState(() => ({
            notify: false
        }))
    }


    render() {

        const {notify} = this.state

        return (
            <Layout className={ notify  ? "normal-height" :"reduce-height"}>
                <Row >
                    <Col style={{ marginTop: '1em' , marginBottom: '1em' , padding:'10px' }}
                         md={{ span:9 , offset: 8 }} sm = {{ span:24 }} xs ={{ span:24}}
                    >
                        <Row  type="flex" justify="space-around" align="top">
                            <Col span={12} sm={24} xs={24} md={18} >
                                By accessing and using this website, you acknowledge that you have read and
                                understand our <a href={"#"}>Cookie Policy</a>, <a href="#">Privacy Policy</a>, and our <a href=""> Terms of Service</a>.
                            </Col>

                            <Col  span={12} sm={24} xs={24} md={4} >
                                <Button  type={"primary"} size={"default"} onClick={this.handleClick}>Got It</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Notification