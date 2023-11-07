import React, {useState} from 'react';
import Property1NormalState from "./Property1NormalState";
import ContainerInputField from "./ContainerInputField";
import styles from "./Basedonthegivencontext.module.css";
import axios from 'axios';

import {Col, Row, Input, Button} from 'antd';
const { TextArea } = Input;

const API_URL = 'http://houseowls-env.eba-twqpwkrr.ap-south-1.elasticbeanstalk.com/contact/';

const Basedonthegivencontext = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    try {
      const response = await axios.post(API_URL, formData, {
        auth: {
          Username: 'user',
          Password: 'password',
        },
      });

      console.log(response);

      if (response.status === 200) {
        alert('Data posted successfully.');
      } else {
        alert('Failed to post data.');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      alert('Failed to post data.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.inputFieldParent}>
      <Row>
        <Col span={24}>
          <span>Name </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <Col span={24} style={{marginTop : "4px"}}>
          <Input 
            name="name"
            style={{width : '76%', height:'190%'}} 
            placeholder="Yashvi" 
            textlabelfontfamily="Poppins" 
            value={formData.name}
            onChange={handleChange} />
        </Col>

        <Col span={24} style={{marginTop : "45px"}}>
          <span>Email Address </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <Col span={24} style={{marginTop : "4px"}}>
          <Input 
            name="email"
            style={{width : '76%', height:'190%'}} 
            placeholder="Enter your valid email" 
            textlabelfontfamily="Poppins" 
            value={formData.email}
            onChange={handleChange} />
        </Col>

        <Col span={24} style={{marginTop : "45px"}}>
          <span>Subject </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <Col span={24} style={{marginTop : "4px"}}>
          <Input 
            name="subject"
            style={{width : '76%', height:'190%'}} 
            placeholder="Select your concern" 
            textlabelfontfamily="Poppins" 
            value={formData.subject}
            onChange={handleChange} />
        </Col>

        <Col span={24} style={{marginTop : "45px"}}>
          <span>Description </span><span style={{color : '#f00'}}>*</span>
        </Col>
        <TextArea
          name="description"
          showCount
          maxLength={100} 
          value={formData.description}
          onChange={handleChange}
          placeholder="Write your message"
          style={{
            height: 120,
            width : '76%',
            resize: 'none',
            marginTop : "4px"
          }}
        />

        <Col span={12} offset={3}>
          <Button type="primary" shape="round" onClick={handleSubmit} style={{width:"100%", height:"70%", marginTop : "45px", backgroundColor : 'tomato'}}>Submit</Button>
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
