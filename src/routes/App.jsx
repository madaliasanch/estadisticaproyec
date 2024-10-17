import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import AppContext from '../context/AppContext';
import Home from '../pages/Home';
import Manual from '../pages/Manual'
import StatisticsCalculator from '../components/StatisticsCalculator';
import Team from '../components/Team';

const App = () => {
    return (
        <AppContext.Provider value={{ /* tu contexto aquí */ }}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path='/manual' element={<Manual />} />
                        <Route exact path="/media/aritmetica" element={<StatisticsCalculator calculationType="Media Aritmética" />} />
                        <Route exact path="/media/ponderada" element={<StatisticsCalculator calculationType="Media Aritmética Ponderada" />} />
                        <Route exact path="/media/geometrica" element={<StatisticsCalculator calculationType="Media Geométrica" />} />
                        <Route exact path="/media/armonica" element={<StatisticsCalculator calculationType="Media Armónica" />} />
                        <Route exact path="/mediana" element={<StatisticsCalculator calculationType="Mediana" />} />
                        <Route exact path="/moda" element={<StatisticsCalculator calculationType="Moda" />} />
                        <Route exact path="/cuartiles" element={<StatisticsCalculator calculationType="Cuartiles" />} />
                        <Route exact path="/varianza/poblacional" element={<StatisticsCalculator calculationType="Varianza Poblacional" />} />
                        <Route exact path="/varianza/simple" element={<StatisticsCalculator calculationType="Varianza Muestral" />} />
                        <Route exact path='/Team/sanchez' element={<Team Name="Madali Alejandra Villagrez Sanchez" />} />
                        <Route exact path='/Team/herrera' element={<Team Name="Roy Bertony Herrera Vicente" />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
