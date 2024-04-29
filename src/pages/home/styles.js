import styled from 'styled-components';
import BannerImg from '../../assets/banner-3.jpg';
import Andrew from '../../assets/AndrewLincoln-Rick.jpg';
import Norman from '../../assets/NormanReedus-Daryl.jpg';
import Danai from '../../assets/DanaiGurira-Michonne.jpg';

export const Banner = styled.div`
  background-image: url(${BannerImg});
  background-size: 100% 100%;
  width: 100%;
  height: 700px;
  margin: 50px 0;

 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
  height: 300px;
 }
 @media only screen and (min-device-width : 600px) and (max-device-width : 1366px) {
  height: 450px;
 }
`;
export const ContainerSV = styled.div`
  border-radius: 7px;
  width: 70%;
  background-color: rgb(35,35,35);
  height: 300px;
  margin: 0 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
  flex-direction: column;
  width: 90%;
  height: 550px;
  margin: 0 5%;
 }
 @media only screen and (min-device-width : 600px) and (max-device-width : 1024px) {
  width: 90%;
  margin: 0 5%;
 }
`;
export const Sinopse =styled.div`
  width: 40%;
  height: 90%;
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
  width: 90%;
  height: 40%;
 }
 @media only screen and (min-device-width : 600px) and (max-device-width : 1366px) {
  width: 50%;
 }
`;
export const Video = styled.div`
  background-color: #000;
  color: rgb(130,130,130);
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
  margin-top: 30px;
  width: 90%;
  height: 30%;
 }
 @media only screen and (min-device-width : 600px) and (max-device-width : 1366px) {
  width: 35%;
  height: 50%;
 }
`;
export const ContainerCards = styled.div`
  border-radius: 7px;
  width: 96%;
  height: 700px;
  margin: 50px 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(35,35,35);

 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
  height: 1500px;
  flex-direction: column;
  background-color: rgba(0,0,0,0);
 }
 @media only screen and (min-device-width : 600px) and (max-device-width : 1023px) {
  width: 100%;
  height: 450px;
  margin: 50px 0;
  background-color: rgba(0,0,0,0);
 }
 @media only screen and (min-device-width : 1024px) and (max-device-width : 1366px) {
  height: 550px;
 }
`;
export const Cards = styled.div`
  border-radius: 5px;
  border: .5px solid #fff;
  text-align: center;
  font-size: 20px;
  background-color: #000;
  width: 30%;
  height: 90%;
  transition: .8s;
 &:hover {
  transform: scale(1.04);
  cursor: pointer;
 }
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
  width: 96%;
  height: 32%;
 }
 @media only screen and (min-device-width : 600px) and (max-device-width : 1366px) {

 }
`;
export const Card1 = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: url(${Andrew});
  background-size: 100% 100%;
  width: 100%;
  height: 95%;
`;
export const Card2 = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: url(${Norman});
  background-size: 100% 100%;
  width: 100%;
  height: 95%;
`;
export const Card3 = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: url(${Danai});
  background-size: 100% 100%;
  width: 100%;
  height: 95%;
`;