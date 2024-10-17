import React, { useState } from 'react';
import {
    TeamOutlined,
    HomeOutlined,
    BookOutlined,
    LineChartOutlined,
    ColumnHeightOutlined,
    BarChartOutlined,
    PartitionOutlined,
    DotChartOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const siderStyle = {
    overflow: 'auto',
    height: '100%',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
};

function getItem(label, key, icon, children, to) {
    return {
        key,
        icon,
        children,
        label: (
            <Link to={to} style={{ color: 'white' }}>
                {label}
            </Link>
        ),
    };
}

const items = [
    getItem('Home', '1', <HomeOutlined />, null, '/'),
    getItem('Manual de uso', '2', <BookOutlined />, null, '/manual'),
    getItem('Media', '3', <LineChartOutlined />, [
        getItem('Aritmética', '4', null, null, '/media/aritmetica'),
        getItem('Aritmética Ponderada', '5', null, null, '/media/ponderada'),
        getItem('Geométrica', '6', null, null, '/media/geometrica'),
        getItem('Armónica', '7', null, null, '/media/armonica')
    ]),
    getItem('Mediana', '8', <ColumnHeightOutlined />, null, '/mediana'),
    getItem('Moda', '9', <BarChartOutlined />, null, '/moda'),
    getItem('Cuartiles', '10', <PartitionOutlined />, null, '/cuartiles'),
    getItem('Varianza', '11', <DotChartOutlined />, [
        getItem('Varianza Poblacional', '12', null, null, '/varianza/poblacional'),
        getItem('Varianza Muestral', '13', null, null, '/varianza/simple')
    ]),
    getItem('Team', '14', <TeamOutlined />, [
        getItem('Sanchez', '15', null, null, '/team/sanchez'),
        getItem('Roy Herrera', '16', null, null, '/team/herrera')
    ])
];

const AppSider = ({ onCollapseChange }) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = (value) => {
        setCollapsed(value);
        onCollapseChange(value); // Llama a la función cuando se colapse o expanda el sider
    };

    return (
        <Sider
            style={siderStyle}
            collapsible
            collapsed={collapsed}
            onCollapse={handleCollapse}
        >
            <div className="demo-logo-vertical" />
            <Menu 
                theme="dark" 
                mode="inline" 
                style={{ color: 'white' }} 
                defaultSelectedKeys={['1']}
                items={items} 
            />
        </Sider>
    );
};

export default AppSider;

