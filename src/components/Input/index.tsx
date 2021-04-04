import React from 'react';
import Svg, { SvgProps } from "react-native-svg";

import { InputArea, CustomInput } from './styles';

interface inputProps {
  IconSvg: React.FC<SvgProps>;
  placeholder: string;
}

function Input ({ IconSvg, placeholder } : inputProps) {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#268596"/>

      <CustomInput 
        placeholder={placeholder}
        placeholderTextColor="#268596"  
      />
    </InputArea>
  )
}

export default Input;
