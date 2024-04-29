import styled from 'styled-components';
import ImgLogo from '../../assets/logo.png';

export const Logo = styled.div`
 background-image: url(${ImgLogo});
 background-size: 100% 100%;
 width: 190px;
 height: 45px;
 margin-left: 50px;

@media only screen and (min-device-width : 260px) and (max-device-width : 1023px) {
 margin-left: 30px;
 width: 170px;
 height: 35px;
}
`;

export const HTopo = styled.div`
  height: 60px;
  width:100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(40,40,40);
  box-shadow: 0 5px 7px 1px rgb(30,30,30);
  color: rgb(150,150,150);

  > svg {
    display: none;
  }

 @media only screen and (min-device-width : 260px) and (max-device-width : 1023px) {
  > svg {
    display: flex;
    margin-left: 20px;
    width: 30px;
    height: 30px;
  }
 }

 `;
export const LTopo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;

 @media only screen and (min-device-width : 300px) and (max-device-width : 1023px) {
  display: none;
 }

 @media only screen and (min-device-width : 1024px) and (max-device-width : 1366px) {
 }
`;






export const HLateral = styled.div`
  display: none;
  background-color: rgb(40,40,40,.7);
  color: rgb(150,150,150);
  width: ${props => props.hl};
  height: 100vh;
  left: 0;
  position: absolute;
  top: 60px;
  animation: ${props => props.hll};
  overflow: hidden;
  
 @keyframes expandirF {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 100%;
  }
 }
 @keyframes ocultarF {
  from {
    opacity: 1;
    width: 100%;
  }
  to {
    opacity: 0;
    width: 0;
  }
 }

 
 > svg {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 15px;
  left: 21px;
  cursor: pointer;
}

@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    display: flex;
 }
@media only screen and (min-device-width : 600px) and (max-device-width : 1023px) {
    display: flex;
 }
`;
export const LLateral = styled.div`
  background-color: rgb(40,40,40);
  position: absolute;
  left: 0;
  top: ${props => props.ll};
  animation: ${props => props.lll};
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: rgb(130,130,130);

  @keyframes expandirI {
    from {
      top: -100%;
    }
    to {
      top: 0;
    }
  }
  @keyframes ocultarI {
    from {
      top: 0;
    }
    to {
      top: -100%;
    }
  }
  `;











  export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: rgb(150,150,150);
    cursor: pointer;
    border-radius: 5px;
    
   > svg {
      margin: 0 10px;
    }
    
   &:hover {
    color: #fff;
    } 
  
   @media only screen and (min-device-width : 300px) and (max-device-width : 1023px) {
    justify-content: flex-start;
    width: 130px;
    font-size: 16px;
    color: rgb(130,130,130);
    margin-bottom: 15px;
    margin-left: 20px;
   }
  `;