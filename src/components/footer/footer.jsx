import React from "react";
import { Link } from "react-router-dom";
import { ContainerFooter, Social, Span } from "./styles";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";

function Footer(){
    return (
        <>
            <ContainerFooter>
                <Span>&copy; Todos os direitos reservado <br/> Desenvolvido por: <i>Túlio Martins</i></Span>
                <Social>
                    <Link to=''>
                        <LuLinkedin /> 
                    </Link>
                    <Link to='https://www.instagram.com/tuliom99/'>
                        <LuInstagram />
                    </Link>
                    <Link to='https://github.com/martins9999'>
                        <LuGithub />
                    </Link>
                </Social>
            </ContainerFooter>
        </>
    )
}

export default Footer;