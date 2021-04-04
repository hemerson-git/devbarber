import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  
  const navigation = useNavigation();
  
  function handleSigninPress() {
    alert('Clicou')
  }
  
  function handleSignupMessagePress() {
    navigation.reset({
      routes: [{name: 'SignUp'}]
    });
  }
  
  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <Input 
          IconSvg={ EmailIcon } 
          placeholder="Digite o seu email"
          value={email}
          onChangeText={value => setEmail(value)}
          type="email"
        />

        <Input 
          IconSvg={ PassIcon }
          placeholder="Digite sua senha"
          value={pass}
          onChangeText={value => setPass(value)}
          type="password"
        />

        <CustomButton
          onPress={handleSigninPress}
        >
          <CustomButtonText> Login </CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton
        onPress={handleSignupMessagePress}
      >
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}

export default SignIn;
