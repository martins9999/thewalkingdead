import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(70,70,70);
  margin: 50px 2%;
  width: 96%;
  min-height: 100vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background-color: rgb(35,35,35);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 23px;

 @media only screen and (min-device-width : 260px) and (max-device-width : 460px) {
  width: 90%;
  font-size: 18px;
 }
 @media only screen and (min-device-width : 461px) and (max-device-width : 651px) {
  width: 90%;
  font-size: 20px;
 }
  
 @media only screen and (min-device-width : 652px) and (max-device-width : 1023px) {
  font-size: 18px;
  width: 43%;
 }

 @media only screen and (min-device-width : 1024px) and (max-device-width : 1366px) {
  width: 30%;
 }
`;

export const H4 = styled.h4`
  margin-top: 15px;
  text-align: center;
  width: 100%;
`;

export const Label = styled.div`
  margin-top: 30px;
  font-size: 20px;

 @media only screen and (min-device-width : 260px) and (max-device-width : 579px) {
  font-size: 16px;
 }

 @media only screen and (min-device-width : 652px) and (max-device-width : 1024px) {
  font-size: 18px;
 }
`;

export const Input = styled.input`
  width: 80%;
  height: 25px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #fff;

@media only screen and (min-device-width : 260px) and (max-device-width : 1024px) {
  height: 20px;
 }
`;

export const Mensagem = styled.textarea`
  width: 80%;
  height: 80px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #fff;

 @media only screen and (min-device-width : 260px) and (max-device-width : 1024px) {
  height: 60px;
 }
`;

export const Button = styled.button`
  background-color: rgb(80, 0, 10);
  color: #fff;
  border-radius: 5px;
  transition: 1s;
  text-align: center;
  width: 160px;
  height: 30px;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 40px;
 &:hover{
  cursor: pointer;
  transform: scale(1.04);
  background-color: red;
 }

 @media only screen and (min-device-width : 260px) and (max-device-width : 1024px) {
  font-size: 18px;
  height: 28px;
  width: 150px;
 }
`;