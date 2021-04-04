import styled from 'styled-components/native';

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83D6E3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const CustomInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  color: #268596;
`; 

export const HidePassButtton = styled.TouchableOpacity`
  margin-right: 16px;
`;
