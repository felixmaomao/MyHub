import React, { Component } from 'react';
import {Button,Select,Input,Row,Col, Form,popMessage,AjaxButton} from 'antd';

const Option = Select.Option;

class EpicPanel extends Component {

    render() {
        console.log(this.props);

        return (
            <div>            
                <Row style={{margin:10}}>
                <Col span={12} offset={6}>
                    <Input placeholder="EpicConferenceId" defaultValue={'2018'}/>            
                </Col>
                </Row>
                <Row style={{margin:10}}>
                <Col span={12} offset={6}>
                    <Input placeholder="DoctorId" defaultValue={'20D'}/>            
                </Col>
                </Row>
                <Row style={{margin:10}}>
                <Col span={12} offset={6}>
                    <Input placeholder="PatientId" defaultValue={'20P'} />            
                </Col>
                </Row>
                <Row style={{margin:10}}>
                <Col span={12} offset={6}>
                    <Input placeholder="DoctorEmail" />            
                </Col>
            </Row>       
                <Row style={{margin:10}}>
                <Col span={12} offset={6}>
                    <Select defaultValue="dev" style={{width:900}}>
                        <Option value="dev">dev</Option>
                        <Option value="ep">ep</Option>
                        <Option value="deva">deva</Option>
                    </Select>
                </Col>            
            </Row>                        
                <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">
                        <Button type="primary">Launch Doctor</Button>
                    </div>
                </Col>        
            </Row>                  
            </div>
        );
    }
}

export default EpicPanel;