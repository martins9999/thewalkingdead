import React from 'react';
import { Container, Contt, Ft1, Ft10, Ft11, Ft12, Ft2, Ft3, Ft4, Ft5, Ft6, Ft7, Ft8, Ft9, Fts } from './styles';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Fotos (){
    return (
        <>
            <Header/>
            <Container>
                <Contt>
                    <Fts><Ft1/>Chandler Riggs-Carl</Fts>
                    <Fts><Ft2/>Emily Kinney-Beth</Fts>
                    <Fts><Ft3/>Jon Bernthal-Shane</Fts>
                    <Fts><Ft4/>Lauren Cohan-Meggie</Fts>
                    <Fts><Ft5/>Melissa McBride-Carol</Fts>
                    <Fts><Ft6/>Sarah Wayne-Lori</Fts>
                    <Fts><Ft7/>Laurie Holden-Andrea</Fts>
                    <Fts><Ft8/>Steven Yeun-Glenn</Fts>
                    <Fts><Ft9/>Scott Wilson- Hershel</Fts>
                    <Fts><Ft10/>Lennie James-Morgan</Fts>
                    <Fts><Ft11/>IronE Singleton-TDog</Fts>
                    <Fts><Ft12/>Michael Rooker-Merle</Fts>
                </Contt>
            </Container>
            <Footer/>
        </>
    )
}

export default Fotos;