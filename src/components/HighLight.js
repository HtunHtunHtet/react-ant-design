import React from "react";
import {Layout ,Typography, Col, Row, Card} from "antd";
const {  Content } = Layout;
const { Title } = Typography;

export default function HighLight () {
    return(
        <Row>
            <Col style={{ marginTop: '1em' , marginBottom: '1em' , padding:'10px' }}
                 md={{ span:10 , offset: 7 }}
            >
                <Content style={{ textAlign: 'center' }}>
                    <Title level={2}>How Can I Help You</Title>
                    <div>
                        Our work then targeted, best practices outcomes social innovation synergy.
                        Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                        program areas scale.
                    </div>
                </Content>
            </Col>

            <Col style={{ marginTop: '1em' , marginBottom: '1em' , padding:'10px' }}
                md={{ span:18 , offset: 3}}
            >
                <Row gutter={[16,16]}>
                    <Col span={8} md={8} sm ={12} xs={24}>
                        <Card  bordered={false} className={"smoke-grey thin-border"}>
                           <div className={'card-header'}>
                               <Title level={4} style={{fontWeight:300}}>
                                   Consult
                                   <span style={{float:'right'}}>
                                       <i className={"fa fa-comments-o"}></i>
                                   </span>
                               </Title>
                               <Content>
                                   Co-create, design thinking; strengthen infrastructure resist granular.
                                   Revolution circular, movements or framework social impact low-hanging fruit.
                                   Save the world compelling revolutionary progress.
                               </Content>
                           </div>
                        </Card>
                    </Col>

                    <Col span={8} md={8} sm ={12} xs={24}>
                        <Card  bordered={false} className={"smoke-grey thin-border"}>
                            <div className={'card-header'}>
                                <Title level={4} style={{fontWeight:300}}>
                                    Design
                                    <span style={{float:'right'}}>
                                       <i className={"fa fa-paint-brush"}></i>
                                   </span>
                                </Title>
                                <Content>
                                    Policymaker collaborates collective impact humanitarian shared value
                                    vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile
                                    issue outcomes vibrant boots on the ground sustainable.
                                </Content>
                            </div>
                        </Card>
                    </Col>

                    <Col span={8} md={8} sm ={12} xs={24}>
                        <Card  bordered={false} className={"smoke-grey thin-border"}>
                            <div className={'card-header'}>
                                <Title level={4} style={{fontWeight:300}}>
                                    Develop
                                    <span style={{float:'right'}}>
                                       <i className={"fa fa-cubes"}></i>
                                   </span>
                                </Title>
                                <Content>
                                    Revolutionary circular, movements a or impact framework social impact low-
                                    hanging. Save the compelling revolutionary inspire progress. Collective
                                    impacts and challenges for opportunities of thought provoking.
                                </Content>
                            </div>
                        </Card>
                    </Col>


                    <Col span={8} md={8} sm ={12} xs={24}>
                        <Card  bordered={false} className={"smoke-grey thin-border"}>
                            <div className={'card-header'}>
                                <Title level={4} style={{fontWeight:300}}>
                                    Marketing
                                    <span style={{float:'right'}}>
                                       <i className={"fa fa-bullhorn"}></i>
                                   </span>
                                </Title>
                                <Content>
                                    Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                                    replicable, effective altruism youth. Mobilize commitment to overcome
                                    injustice resilient, uplift social transparent effective.
                                </Content>
                            </div>
                        </Card>
                    </Col>

                    <Col span={8} md={8} sm ={12} xs={24}>
                        <Card  bordered={false} className={"smoke-grey thin-border"}>
                            <div className={'card-header'}>
                                <Title level={4} style={{fontWeight:300}}>
                                    Manage
                                    <span style={{float:'right'}}>
                                       <i className={"fa fa-object-group"}></i>
                                   </span>
                                </Title>
                                <Content>
                                    Change-makers innovation or shared unit of analysis. Overcome injustice
                                    outcomes strategize vibrant boots on the ground sustainable. Optimism,
                                    effective altruism invest optimism corporate social.
                                </Content>
                            </div>
                        </Card>
                    </Col>

                    <Col span={8} md={8} sm ={12} xs={24}>
                        <Card  bordered={false} className={"smoke-grey thin-border"}>
                            <div className={'card-header'}>
                                <Title level={4} style={{fontWeight:300}}>
                                    Evolve
                                    <span style={{float:'right'}}>
                                       <i className={"fa fa-line-chart"}></i>
                                   </span>
                                </Title>
                                <Content>
                                    Activate catalyze and impact contextualize humanitarian. Unit of analysis
                                    overcome injustice storytelling altruism. Thought leadership mass
                                    incarceration. Outcomes big data, fairness, social game-changer.

                                </Content>
                            </div>
                        </Card>
                    </Col>
                </Row>

               {/* <Row gutter={[16,16]}>
                </Row>*/}
            </Col>
        </Row>

    )
}
