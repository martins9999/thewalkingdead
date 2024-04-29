import styled from "styled-components";
import img1 from '../../assets/fotos/ChandlerRiggs-Carl.jpg';
import img2 from '../../assets/fotos/EmilyKinney-Beth.jpg';
import img3 from '../../assets/fotos/JonBernthal-Shane.jpg';
import img4 from '../../assets/fotos/LaurenCohan-Meggie.jpg';
import img5 from '../../assets/fotos/MelissaMcBride-Carol.jpg';
import img6 from '../../assets/fotos/SarahWayne-Lori.jpg';
import img7 from '../../assets/fotos/LaurieHolden-Andrea.jpg';
import img8 from '../../assets/fotos/StevenYeun-Glenn.jpg';
import img9 from '../../assets/fotos/ScottWilson-Hershel.jpg';
import img10 from '../../assets/fotos/LennieJames-Morgan.jpg';
import img11 from '../../assets/fotos/IronESingleton-TDog.jpg';
import img12 from '../../assets/fotos/MichaelRooker-Merle.jpg';



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Contt = styled.div`
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 60px;
    column-gap: 60px;
    width: 94%;
 @media only screen and (min-device-width : 300px) and (max-device-width : 699px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
 }
 @media only screen and (min-device-width : 700px) and (max-device-width : 1023px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
    column-gap: 40px;
    width: 96%;
 }
 @media only screen and (min-device-width : 1024px) and (max-device-width : 1500px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
    column-gap: 40px;
    width: 96%;
 }
`;

export const Fts = styled.div`
    border-radius: 5px;
    width: 100%;
    height: 550px;
    text-align: center;
    font-size: 20px;
    background-color: #000;
    transition: .8s;
 &:hover {
    transform: scale(1.04);
    cursor: pointer;
 }
 @media only screen and (min-device-width : 300px) and (max-device-width : 430px) {
    width: 90%;
    height: 500px;  
 }
 @media only screen and (min-device-width : 431px) and (max-device-width : 699px) {
    width: 65%;
    height: 500px;
 }
`;

export const Ft1 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img1});
    background-size: 100% 100%;
`;
export const Ft2 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img2});
    background-size: 100% 100%;
`;
export const Ft3 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img3});
    background-size: 100% 100%;
`;
export const Ft4 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img4});
    background-size: 100% 100%;
`;
export const Ft5 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img5});
    background-size: 100% 100%;
`;
export const Ft6 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img6});
    background-size: 100% 100%;
`;
export const Ft7 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img7});
    background-size: 100% 100%;
`;
export const Ft8 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img8});
    background-size: 100% 100%;
`;
export const Ft9 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img9});
    background-size: 100% 100%;
`;
export const Ft10 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img10});
    background-size: 100% 100%;
`;
export const Ft11 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img11});
    background-size: 100% 100%;
`;
export const Ft12 = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 95%;
    background-image: url(${img12});
    background-size: 100% 100%;
`;