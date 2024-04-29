import React from 'react';
import { Button, Container, Form, H4, Input, Label, Mensagem, } from './styles';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Contato (){
    return (
        <>
            <Header/>
            <Container>
                    <Form>
                        <H4>Formulário para entrar em contato</H4> 
                        <Label for='nome'>Nome</Label>
                        <Input name='nome' placeholder='Digite aqui o seu nome' required />
                        <Label for='email'>Email</Label>
                        <Input name='email' placeholder='Digite aqui o seu e-mail' required />
                        <Label for='mensagem'>Mensagem</Label>
                        <Mensagem name='mensagem' placeholder='Digite aqui sua mensagem' required />
                        <Button type='submit' >Enviar</Button>
                    </Form>
            </Container>
            <Footer/>                
        </>
    )
}
export default Contato;