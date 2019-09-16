/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col, Button,
    UncontrolledTooltip
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Manage Audiences</CardTitle>
                  <Button className="btn-sm btn-round btn-success"><i className="fa fa-plus"/> New Audience</Button>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col className="col-ms-9" xs="9">
                          Newsletter Suntrip <br />
                          <span className="text-muted">
                            <small>Created at 2019-05-07</small>
                          </span>
                        </Col>
                        <Col className="justify-content-around" md="3" xs="3">
                          <Row className="justify-content-around">
                            <UncontrolledTooltip placement="right" target="mailIcon1">
                              New Mail
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="right" target="cogIcon1">
                              Parameters
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="right" target="deleteIcon1">
                              Delete Audience
                            </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="danger"
                                outline
                                size="sm"
                                id="deleteIcon1"
                            >
                              <i className="fa fa-times" />
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="warning"
                                outline
                                size="sm"
                                id="cogIcon1"
                            >
                              <i className="fa fa-cog" />
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="success"
                                outline
                                size="sm"
                                id="mailIcon1"
                            >
                              <i className="fa fa-envelope" />
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="col-ms-9" xs="9">
                          Promotion Bullshit <br />
                          <span className="text-muted">
                            <small>Created at 2017-06-28</small>
                          </span>
                        </Col>
                        <Col className="justify-content-around" md="3" xs="3">
                          <Row className="justify-content-around">
                            <UncontrolledTooltip placement="right" target="mailIcon2">
                              New Mail
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="right" target="cogIcon2">
                              Parameters
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="right" target="deleteIcon2">
                              Delete Audience
                            </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="danger"
                                outline
                                size="sm"
                                id="deleteIcon2"
                            >
                              <i className="fa fa-times" />
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="warning"
                                outline
                                size="sm"
                                id="cogIcon2"
                            >
                              <i className="fa fa-cog" />
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="success"
                                outline
                                size="sm"
                                id="mailIcon2"
                            >
                              <i className="fa fa-envelope" />
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="col-ms-9" xs="9">
                          Premium User Shit <br />
                          <span className="text-muted">
                            <small>Created at 2015-02-21</small>
                          </span>
                        </Col>
                        <Col className="justify-content-around" md="3" xs="3">
                          <Row className="justify-content-around">
                            <UncontrolledTooltip placement="right" target="mailIcon3">
                              New Mail
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="right" target="cogIcon3">
                              Parameters
                            </UncontrolledTooltip>
                            <UncontrolledTooltip placement="right" target="deleteIcon3">
                              Delete Audience
                            </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="danger"
                                outline
                                size="sm"
                                id="deleteIcon3"
                            >
                              <i className="fa fa-times" />
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="warning"
                                outline
                                size="sm"
                                id="cogIcon3"
                            >
                              <i className="fa fa-cog" />
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="success"
                                outline
                                size="sm"
                                id="mailIcon3"
                            >
                              <i className="fa fa-envelope" />
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
