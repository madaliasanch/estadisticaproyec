import React, { useState } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import AppSider from '../components/Sider';

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Cambia el ancho del layout dependiendo del estado de colapsado
  const siderWidth = collapsed ? 80 : 192;

  return (
    <Layout hasSider>
      <AppSider onCollapseChange={setCollapsed} />
      <Layout
        style={{
          marginInlineStart: siderWidth,
          minHeight: '98.25vh',
          height: '100%',
          width: '100%',
          transition: 'margin-inline-start 0.2s ease', // Transición suave al cambiar el ancho
        }}
      >
        <AppHeader />
        <Layout.Content
          style={{
            margin: '24px 16px 0',
            overflowY: 'scroll',
            overflowX: 'hidden',
            padding: 20,
          }}
        >
          {children}
        </Layout.Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
