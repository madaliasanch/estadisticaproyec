// src/components/Footer.jsx
import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const AppFooter = () => {
  return (
    <AntFooter
      style={{
        textAlign: 'center',
        background: 'white',
      }}
    >
        Created by © <br />
        Madali Alejandra Villagrez Sanchez 1490-23-4979 <br />
        Roy Bertony Herrera Vicente 1490-23-22849
    </AntFooter>
  );
};

export default AppFooter;
