import { useState } from "react";
import { HLateral, HTopo, Item, LLateral, LTopo, Logo, } from "./styles";
import { Link } from "react-router-dom";
import { LuHome, LuImage, LuInfo, LuListX, LuMails, LuMenu, LuMessagesSquare, } from "react-icons/lu";


function Header () {
    const [mostrar, setMostrar] = useState(true);
    const [fundoP, setFundoP] = useState('0');
    const [itensP, setItensP] = useState('-100%');
    const [fundoA, setFundoA] = useState('');
    const [itensA, setItensA] = useState('');
    const expandir =()=> {
        setMostrar(false)
        setFundoA('expandirF .6s');
        setFundoP('100%');
        setItensA('expandirI 1s');
        setItensP('0');
    }
    const ocultar =()=> {
        setMostrar(true)
        setItensA('ocultarI .2s');
        setItensP('-100%');
        setFundoA('ocultarF .8s');
        setFundoP('0');
    }




    return (
     <>
        <HTopo>
            {mostrar ? <LuMenu onClick={expandir}/> : <LuListX  onClick={ocultar}/>}
            <Logo/>
            <LTopo>
                <Link to='/' style={{textDecoration:'none'}}>
                    <Item><LuHome/> Início</Item>
                </Link>
                <Link to='/fotos' style={{textDecoration:'none'}}>
                    <Item><LuImage/> Fotos</Item>
                </Link>
                <Link to='/contato' style={{textDecoration:'none'}}>
                    <Item><LuMails/> Contato</Item>
                </Link>
                <Link to='/comentario' style={{textDecoration:'none'}}>
                    <Item><LuMessagesSquare/> Comentários</Item>
                </Link>
                <Link to='/info' style={{textDecoration:'none'}}>
                    <Item><LuInfo/> Informações</Item>
                </Link>
            </LTopo>
        </HTopo>
        
        <HLateral hl={fundoP} hll={fundoA} onClick={ocultar}>   
            <LLateral ll={itensP} lll={itensA}>
                <Link to='/' style={{textDecoration:'none'}}>
                    <Item><LuHome/> Início</Item>
                </Link>
                <Link to='/fotos' style={{textDecoration:'none'}}>
                    <Item><LuImage/> Fotos</Item>
                </Link>
                <Link to='/contato' style={{textDecoration:'none'}}>
                    <Item><LuMails/> Contato</Item>
                </Link>
                <Link to='/comentario' style={{textDecoration:'none'}}>
                    <Item><LuMessagesSquare/> Comentários</Item>
                </Link>
                <Link to='/info' style={{textDecoration:'none'}}>
                    <Item><LuInfo/> Informações</Item>
                </Link>
            </LLateral>
        </HLateral>
     </>
    )
}
export default Header;