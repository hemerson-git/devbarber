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
import PersonIcon from "../../assets/person.svg";
import PassIcon from "../../assets/lock.svg";

function SignUp() {
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const navigation = useNavigation();
  
  function handleSignUp() {
    alert ('Cadastrado com Sucesso!!')
  }
  
  function handleSignupMessagePress() {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }
  
  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <Input 
          IconSvg={ PersonIcon } 
          placeholder="Digite o seu nome"
          value={name}
          onChangeText={value => setName(value)}
          type="text"
        />

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
          onPress={handleSignUp}
        >
          <CustomButtonText> Cadastrar </CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton
        onPress={handleSignupMessagePress}
      >
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}

export default SignUp;
