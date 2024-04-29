import styled from "styled-components";

export const ContainerFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 130px;
  background-color: rgb(40,40,40);
  box-shadow: 0 -5px 7px 1px rgb(30,30,30);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

 @media only screen and (min-device-width : 300px) and (max-device-width : 1023px) {
  height: 100px;
  font-size: 14px;
 }

`;

export const Span = styled.span`
  text-align: center;
`;

export const Social = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 28px;

 svg {
  color: rgb(130,130,130);
  cursor: pointer;

 &:hover {
  color: #fff;
 }
 }
 @media only screen and (min-device-width : 300px) and (max-device-width : 1023px) {
  font-size: 23px;
 }
`;