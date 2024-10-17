import { Row, Col, Button } from 'antd';
import React from 'react';
import {
    DownloadOutlined
} from '@ant-design/icons';
import PDF from "../assets/MANUAL DE USUARIO.pdf"


const Manual = () => {
    return (
        <Row>
            <Col span={24} style={{ marginBottom: 20 }}>
                <h1>Descargue el manual de uso y haga uso de nuestra herramienta.</h1>
                <a href={PDF} download style={{ textDecoration: 'none' }}>
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                    >
                        Descargar Manual
                    </Button>
                </a>
            </Col>

            <Col span={24} style={{ marginTop: 25, textAlign: 'center' }}>
                <iframe src={PDF} style={{ width: '80%', height: '70vh' }} ></iframe>
            </Col>
        </Row>
    );
}

export default Manual;
