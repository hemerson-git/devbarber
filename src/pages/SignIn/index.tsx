import React from "react";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

// Components
import Input from "../../components/Input";

//SVG
import BarberLogo from "../../assets/barber.svg";
import EmailIcon from "../../assets/email.svg";
import PassIcon from "../../assets/lock.svg";

function SignIn() {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <Input 
          IconSvg={ EmailIcon } 
          placeholder="Digite o seu email"
        />

        <Input 
          IconSvg={ PassIcon }
          placeholder="Digite sua senha"
        />

        <CustomButton>
          <CustomButtonText> Login </CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}

export default SignIn;
