import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63C2D2;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const CustomButtonText = styled.Text`
  color: #FFF;
  font-size: 18px;
  text-transform: uppercase;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;

export const SignMessageButtonTextBold = styled.Text`
  color: #268596;
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
`;
