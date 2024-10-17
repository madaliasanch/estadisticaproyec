import { Row, Col } from 'antd';
import React from 'react';
import estadisticasImage from '../assets/Estadísticas.jpg';
import estadisticaBeneficios from '../assets/beneficios.jpg';
import estadisticaTipos from '../assets/tipos_estadistica.png';

const InitEstadistica = () => {
    return (
        <section className="main-container" style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
            <div className="InitEstadistica">
                <Row gutter={[16, 16]}>
                    <Col sm={24} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${estadisticasImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h1>¿Qué es la Estadística?</h1>
                        <p>La estadística es una rama de las matemáticas que se encarga de recopilar, analizar, interpretar y presentar datos. Su objetivo es proporcionar un marco para tomar decisiones basadas en datos y ayudar a entender fenómenos a través del análisis cuantitativo. La estadística se utiliza en diversas disciplinas, incluyendo la ciencia, la ingeniería, la economía, la psicología y más.</p>
                    </Col>

                    <Col sm={24} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${estadisticaTipos})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h1>Métodos de Uso de la Estadística</h1>
                        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                            <Col sm={24} md={12}>
                                <h3>Estadística Descriptiva:</h3>
                                <p><span style={{ fontWeight: 'bold' }}>Objetivo:</span> Resumir y describir las características de un conjunto de datos.</p>
                                <p><span style={{ fontWeight: 'bold' }}>Técnicas:</span></p>
                                <ul>
                                    <li>Medidas de tendencia central (media, mediana y moda).</li>
                                    <li>Medidas de dispersión (rango, varianza y desviación estándar).</li>
                                    <li>Tablas y gráficos (histogramas, diagramas de caja, gráficos de dispersión).</li>
                                </ul>
                            </Col>
                            <Col sm={24} md={12}>
                                <h3>Estadística Inferencial:</h3>
                                <p><span style={{ fontWeight: 'bold' }}>Objetivo:</span> Hacer inferencias y predicciones sobre una población a partir de una muestra.</p>
                                <p><span style={{ fontWeight: 'bold' }}>Técnicas:</span></p>
                                <ul>
                                    <li>Pruebas de hipótesis.</li>
                                    <li>Intervalos de confianza.</li>
                                    <li>Análisis de regresión y correlación</li>
                                    <li>Métodos de muestreo.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={24} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${estadisticaBeneficios})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h1>Beneficios de la estadística</h1>
                        <p>La integración de la estadística en la tecnología tiene múltiples beneficios:</p>
                        <Row gutter={[16, 16]}>
                            <Col sm={24} md={12}>
                                <h3>Toma de Decisiones Informadas:</h3>
                                <p>
                                    La estadística permite a las empresas y organizaciones tomar decisiones basadas en datos,
                                    minimizando la incertidumbre y aumentando la probabilidad de éxito.
                                </p>
                            </Col>
                            <Col sm={24} md={12}>
                                <h3>Análisis de Datos:</h3>
                                <p>
                                    En el contexto de Big Data, la estadística es fundamental para analizar grandes volúmenes de
                                    datos y extraer información valiosa que puede conducir a mejoras en productos y servicios.
                                </p>
                            </Col>
                            <Col sm={24} md={12}>
                                <h3>Optimización de Procesos:</h3>
                                <p>
                                    Las técnicas estadísticas ayudan a identificar ineficiencias y a optimizar procesos, lo que
                                    resulta en una mejor utilización de recursos y reducción de costos.
                                </p>
                            </Col>
                            <Col sm={24} md={12}>
                                <h3>Predicción y Modelado:</h3>
                                <p>
                                    Los modelos estadísticos son herramientas clave en el desarrollo de algoritmos de aprendizaje
                                    automático e inteligencia artificial, permitiendo predecir tendencias y comportamientos futuros.
                                </p>
                            </Col>
                            <Col sm={24} md={12}>
                                <h3>Investigación y Desarrollo:</h3>
                                <p>
                                    La estadística juega un papel esencial en la investigación científica, permitiendo el diseño de
                                    experimentos, la validación de resultados y la interpretación de datos.
                                </p>
                            </Col>
                            <Col sm={24} md={12}>
                                <h3>Visualización de Datos:</h3>
                                <p>
                                    Las herramientas estadísticas facilitan la visualización de datos, lo que ayuda a comunicar
                                    resultados de manera efectiva y a hacer más accesible la información a diferentes audiencias.
                                </p>
                            </Col>
                            <Col sm={24} md={12}>
                                <h3>Control de Calidad:</h3>
                                <p>
                                    En la manufactura y otros sectores, la estadística se utiliza para el control de calidad,
                                    asegurando que los productos cumplan con los estándares establecidos.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default InitEstadistica;