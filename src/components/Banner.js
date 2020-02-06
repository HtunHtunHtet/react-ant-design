import {Button, Carousel, Col, Row} from "antd";
import banner from "../images/banner.jpg";
import React from "react";

export default function Banner () {
    return(
        <Carousel>
            <div className={'banner-container'}>
                <Row>
                    <div className={"banner-overlay"} />
                    <Row >
                        <Col span={8} offset={8} className={"banner-text"}>
                            <h2>
                                Hello! I'm Htun Htun Htet<br/>
                                <strong>  Consult, Design, and Develop Websites </strong>
                            </h2>
                            <div>
                                Have something great in mind? Feel free to contact me.<br/>
                                I'll help you to make it happen.
                            </div>
                            <Button className={"call-to-action"} type={"primary"} ghost={"true"} size={"large"}>Let's Make Contact</Button>
                        </Col>
                    </Row>

                    <img src={banner}  alt="banner" className={"banner"} />
                </Row>
            </div>
        </Carousel>
    )
}