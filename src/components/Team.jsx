import React from "react";
import { Row, Col } from 'antd';
import Sanchez from '../assets/Sanchez.png'
import Herrera from '../assets/herrera.jpg'

const TeamMember = ({ name, photo, description }) => {
    return (
        <Row gutter={[16,16]} style={{ display: "flex", justifyContent: "center" }} >
            <Col xs={24} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={photo} alt={name} style={styles.photo} />
                <h3>{name}</h3>
                <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>') }} />
            </Col>
        </Row>
    );
};

const Team = ({ Name }) => {
    let memberData;

    switch (Name) {
        case "Madali Alejandra Villagrez Sanchez":
            memberData = {
                name: "Madali Alejandra Villagrez Sanchez 1490-23-4979",
                photo: Sanchez,
                description: `
                Una joven llena de energía y curiosidad, siempre dispuesta a aprender algo nuevo. Ha mostrado un interés innato por la tecnología y la resolución de problemas, lo que la ha llevado a perseguir su sueño de convertirse en ingeniera de sistemas. No se detiene ante ningún obstáculo; cada desafío es una oportunidad para crecer y mejorar. 
                
                Su motivación es contagiosa; cuando habla de sus proyectos o de las nuevas tecnologías que ha descubierto, sus ojos brillan con emoción. Sabe que el camino hacia el éxito no siempre es fácil, pero enfrenta cada dificultad con determinación y una actitud positiva. Ya sea pasando horas en la biblioteca, realizando cursos en línea o trabajando en proyectos personales, nunca se rinde y siempre busca mejorar sus habilidades.
                
                Con un enfoque proactivo y una mente analítica, es capaz de transformar ideas complejas en soluciones prácticas. Además, tiene un fuerte sentido de la colaboración, disfrutando de trabajar en equipo y aprender de los demás. Su meta es no solo ser una ingeniera de sistemas, sino también inspirar a otras chicas a seguir sus sueños en el campo de la tecnología.`
            };
            break;
        case "Roy Bertony Herrera Vicente":
            memberData = {
                name: "Roy Bertony Herrera Vicente 1490-23-22849",
                photo: Herrera,
                description: "Con una mochila siempre lista para la aventura, este joven es un apasionado viajero que encuentra su felicidad explorando las montañas y disfrutando de la naturaleza. Su amor por la comida lo lleva a descubrir nuevos sabores en cada lugar que visita, desde las delicias locales hasta las exquisiteces gourmet.\n\n El baile es una de sus formas favoritas de expresión, y no puede resistirse a moverse al ritmo de su música preferida, que abarca desde las letras profundas de Ricardo Arjona y Adele hasta los ritmos vibrantes de Gaby Moreno, Nicki Nicole y Trueno. La marimba y la marimba orquesta son parte esencial de sus momentos festivos, llenando su vida de alegría y tradición. Atrevido por naturaleza, se enfrenta a nuevos desafíos sin miedo, excepto por uno: <span style='font-weight: bold;'> el cálculo integral</span>, que le causa un poco de ansiedad. A pesar de este pequeño obstáculo, su espíritu aventurero y su amor por la vida lo impulsan a seguir adelante, disfrutando cada paso del camino."
            };
            break;
        default:
            return <p>Colaborador no encontrado.</p>;
    }

    return <TeamMember {...memberData} />;
};

const styles = {
    memberContainer: {
        textAlign: 'center',
        margin: '20px',
    },
    photo: {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        objectFit: 'cover',
    }
};

export default Team;
