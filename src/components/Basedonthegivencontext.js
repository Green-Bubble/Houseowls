import React, {useState} from 'react';
import Property1NormalState from "./Property1NormalState";
import ContainerInputField from "./ContainerInputField";
import styles from "./Basedonthegivencontext.module.css";

import {Col, Row, Input, Button} from 'antd';
const { TextArea } = Input;

const Basedonthegivencontext = () => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className={styles.inputFieldParent}>
      <Row>
        <Col span={24}>
          <span>Name </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <Col span={24} style={{marginTop : "4px"}}>
          <Input style={{width : '76%', height:'190%'}} value={name} placeholder="Yashvi" textlabelfontfamily="Poppins" onChange={(e) => setName(e.target.value)}></Input>
        </Col>

        <Col span={24} style={{marginTop : "45px"}}>
          <span>Email Address </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <Col span={24} style={{marginTop : "4px"}}>
          <Input style={{width : '76%', height:'190%'}} value={email} placeholder="Enter your valid email" textlabelfontfamily="Poppins" onChange={(e) => setEmail(e.target.value)}></Input>
        </Col>

        <Col span={24} style={{marginTop : "45px"}}>
          <span>Subject </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <Col span={24} style={{marginTop : "4px"}}>
          <Input style={{width : '76%', height:'190%'}} value={subject} placeholder="Select your concern" textlabelfontfamily="Poppins" onChange={(e) => setSubject(e.target.value)}></Input>
        </Col>

        <Col span={24} style={{marginTop : "45px"}}>
          <span>Description </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <TextArea
          showCount
          maxLength={100} 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write your message"
          style={{
            height: 120,
            width : '76%',
            resize: 'none',
            marginTop : "4px"
          }}
        />

        <Col span={12} offset={3}>
          <Button type="primary" shape="round" onClick={() => {console.log(name, email, subject, description);}} style={{width:"100%", height:"70%", marginTop : "45px", backgroundColor : 'tomato'}}>Submit</Button>
        </Col>
      </Row>
      
      {/*
      <ContainerInputField />
      <Property1NormalState
        labelText="Subject"
        inputFieldHintText="select your concern"
        property1NormalStateGap="4px"
        property1NormalStatePosition="absolute"
        property1NormalStateTop="178px"
        property1NormalStateLeft="0px"
        textLabelLineHeight="unset"
        textLabelFontFamily="Poppins"
        textLabelFontWeight="500"
        bLineHeight="unset"
        frameDivBorder="unset"
        frameDivBackgroundColor="#f8f9fc"
        inputFieldHintFontFamily="Poppins"
        inputFieldHintOpacity="0.6"
  />
      <img className={styles.groupChild} alt="" src="/group-55.svg" /> */}
      
    </div>
  );
};

export default Basedonthegivencontext;
