import React, { useState } from 'react';
import { Input, Button, Typography, Upload, message, Row, Col, notification, Flex } from 'antd';
import {
    UploadOutlined
} from '@ant-design/icons';
import * as XLSX from 'xlsx';

const { Title, Text } = Typography;

const StatisticsCalculator = ({ calculationType }) => {
    const [values, setValues] = useState([]); // Estado inicial de las entradas
    const [newValue, setNewValue] = useState(''); // Estado para el input inicial
    const [result, setResult] = useState(null);
    const [enabled, setEnabled] = useState(true);
    const [threshold, setThreshold] = useState(3);

    // Uso de la notificacion para ingreso manual cuando no tiene informacion
    const [api, contextHolder] = notification.useNotification({
        stack: enabled
            ? {
                threshold,
            }
            : false,
    });

    // Apertura de la notificacion
    const openNotification = () => {
        api.warning({
            message: 'Notificación',
            description: 'Por favor, ingresa un número antes de agregar el elemento.',
            duration: 2,
        });
    };

    // Manejo del archivo excel
    const handleFileUpload = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result); //Convierte el archivo a binbario para poder dar lectura en el ArrayBuffer
            const workbook = XLSX.read(data, { type: 'array' }); //inicia con la lectura al array que se genera en ArrayBuffer
            const worksheet = workbook.Sheets[workbook.SheetNames[0]]; //obtiene el nombre de la primer hoja, y es la misma que usa para leer
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); //con la data ya capturada la convierte en un json
            const numbers = jsonData.flat().map(Number).filter(num => !isNaN(num)); //con el json ya formado solo obtiene o extrae a los que sean numeros
            setValues(prevValues => [
                ...prevValues, // mantenemos los valores que ya se tengan ingresado, algo como una copia de lo que existe, mas lo que ingresamos en el archivo
                ...numbers.map(num => ({ value: num })) //Ingreso al array los nuevos valores
            ]);
            api.success({
                message: "Carga correcta",
                description: 'Archivo cargado correctamente',
                duration: 2,
            });
        };
        reader.readAsArrayBuffer(file);
        return false;
    };

    // Manejo del cambio de los inputs de entrada
    const handleInputChange = (index, e) => {
        const newValues = [...values]; //creamos una copia del array de los valores
        newValues[index].value = e.target.value; // Actualiza el valor de la posicion que sufrio cambio, sin modificar al resto
        setValues(newValues); //Setea o indica cual es el nuevo valor del estado
    };

    // Manejo del cambio del input inicial
    const handleNewValueChange = (e) => {
        setNewValue(e.target.value); //Almacena el valor que se digitalizo para luego asignarseo al input que se crea
    };

    // Agrega un nuevo campo de entrada
    const addInputField = () => {
        if (newValue) { // Solo agrega si hay un valor
            setValues([...values, { value: newValue }]); //Agrega el valor al array
            setNewValue(''); // Limpia el input inicial
        } else { //Alerta para digitalizacion de un valor
            openNotification();
        }
    };

    // Elimina un campo de entrada
    const removeInputField = (index) => {
        const newValues = values.filter((_, i) => i !== index); //filtra la posicion del elemento en el array, para eliminarlo o excluirlo
        setValues(newValues); //Indica al estado cual es el nuevo valor que contendra
    };

    // Calcula el resultado basado en los valores ingresados
    const Calcular = () => {
        const valoresNumericos = values.map(v => parseFloat(v.value)).filter(num => !isNaN(num)); //Valida que los valores sean numericos
        let res; // variable de respuesta

        //Valida cual es el caso que se ha de calcular
        switch (calculationType) {
            case 'Media Aritmética':
                res = valoresNumericos.reduce((acc, val) => acc + val, 0) / valoresNumericos.length; //reduce hace la suma de los valores del array para luego dividir en su longitud
                break;
            case 'Media Aritmética Ponderada':
                res = valoresNumericos.reduce((acc, val) => acc + val, 0) / valoresNumericos.length; //reduce hace la suma de los valores del array para luego dividir en su longitud
                break;
            case 'Media Geométrica':
                res = MedGeometrica(valoresNumericos);
                break;
            case 'Media Armónica':
                res = MedArmonica(valoresNumericos);
                break;
            case 'Mediana':
                res = Mediana(valoresNumericos);
                break;
            case 'Moda':
                res = Moda(valoresNumericos);
                break;
            case 'Cuartiles':
                res = Cuartiles(valoresNumericos);
                break;
            case 'Varianza Poblacional':
                res = Varianza(valoresNumericos, true);
                break;
            case 'Varianza Muestral':
                res = Varianza(valoresNumericos, false);
                break;
            default:
                res = 'Tipo de cálculo no válido';
        }
        setResult(res);
    };

    const MedGeometrica = (nums) => {
        const product = nums.reduce((acc, val) => acc * val, 1); //Se multiplica cada registro por el acumulable que se tiene, 1 es el valor inicial para la multiplicacion
        return Math.pow(product, 1 / nums.length); //realiza la raiz n-esima 1/ nums es la raiz geometrica del resultado de la multiplicacion
    };

    const MedArmonica = (nums) => {
        const sum = nums.reduce((acc, val) => acc + (1 / val), 0); //realiza la suma de los elementos del array
        return nums.length / sum; //divide la lomgitud en el total de la suma 
    };

    const Mediana = (nums) => {
        const sorted = [...nums].sort((a, b) => a - b); //Ordena los valores de mayor a menor, ... se usa para sacar una copia del original
        const mid = Math.floor(sorted.length / 2); //divide la longitud en dos para otener la mitad, floor lo aproxima hacia abajo cuando es impar
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2; // valida si es para o impar e indica cual seria la posicion
    };

    const Moda = (nums) => {
        const frecuencia = {};
        nums.forEach(num => {
            frecuencia[num] = (frecuencia[num] || 0) + 1; //Verifica si el numero existr  en frecuncia y/o le suma uno
        });
        const freqMax = Math.max(...Object.values(frecuencia));  //busca el valor mas alto o con mas repeticiones
        return Object.keys(frecuencia).filter(num => frecuencia[num] === freqMax);
    };

    const Cuartiles = (nums) => {
        const orden = [...nums].sort((a, b) => a - b); //Ordenamos de menor a mayor ... obtiene una copia para no modificar el original
        const q1 = Mediana(orden.slice(0, Math.floor(orden.length / 2))); //q1 es la mitad de la mitad que esta antes de la mediana
        const q2 = Mediana(orden); // q2 es la mediana
        const q3 = Mediana(orden.slice(Math.ceil(orden.length / 2))); //q3 es la mitad de la mitad que esta luego de la mediana
        return { Q1: q1, Q2: q2, Q3: q3 };
    };

    const Varianza = (nums, isPoblacional) => {
        const mean = nums.reduce((acc, val) => acc + val, 0) / nums.length; //se calcula la media 
        const squaredDiffs = nums.map(num => Math.pow(num - mean, 2)); // se calcula la diferencia al cuadrado de cada número con respecto a la media
        const totalSquaredDiffs = squaredDiffs.reduce((acc, val) => acc + val, 0); //se suman las diferencias al cuadrado
        return isPoblacional ? totalSquaredDiffs / nums.length : totalSquaredDiffs / (nums.length - 1); //isPoblacional se retorna la var poblacional, la var muestral
    };

    return (
        <Row gutter={[16, 16]} style={{display: "flex", justifyContent: 'center'}}>
            {/* titulo */}
            <Col sm={24}>
                <Title level={3}>{calculationType}</Title>
            </Col>

            {/* Ingreso manual, carga de archivo, calcular y respuesta */}
            <Col sm={24} md={9} lg={6} style={{ textAlign: 'center', display: 'flex' }}>
                <Input
                    value={newValue} // estado para el valor inicial
                    onChange={handleNewValueChange} // INPUT inicial para agregar mas inputs con valores
                    placeholder="Ingresa un número"
                    style={{ width: '80%'}}
                />
                <Button onClick={addInputField}>+</Button>
            </Col>
            <Col sm={24} md={9} lg={6} style={{ textAlign: 'center' }}>
                <Upload
                    beforeUpload={handleFileUpload}
                    accept=".xlsx,.xls"
                    showUploadList={false}
                    style={{ width: '100%' }}
                >
                    <Button icon={<UploadOutlined />} style={{ width: '100%' }}>Subir archivo Excel</Button>
                </Upload>
            </Col>
            <Col sm={24} md={6} lg={2} style={{ textAlign: 'center' }}>
                <Button type="primary" onClick={Calcular}>
                    Calcular
                </Button>
            </Col>
            <Col sm={24} md={24} lg={10} style={{ textAlign: 'center' }}>
                {result !== null && (
                    <Text style={{ display: 'block', fontWeight: 'bold' }}>
                        Resultado: {JSON.stringify(result)}
                    </Text>
                )}
            </Col>

            {/* inputs con valores para iniciar a calcular */}
            <Col span={24} style={{ marginTop: 15 }}>
                <Row gutter={[16,16]}>
                    {values.map((value, index) => (
                        <Col sm={24} md={8} lg={6} key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <Input
                                value={value.value}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Ingresa un número"
                                style={{ width: '80%' }} //Tamanno del input
                            />
                            <Button onClick={() => removeInputField(index)}>-</Button> {/* Boton para eliminar el elemento */}
                        </Col>
                    ))}
                </Row>
            </Col>

            {contextHolder} {/* la activacion de la notificacion */}
        </Row>
    );
};

export default StatisticsCalculator;
