import React, { useState } from "react";
import Svg, { SvgProps } from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { InputArea, CustomInput, HidePassButtton } from "./styles";

interface inputProps {
  IconSvg: React.FC<SvgProps>;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  type: string;
}

function Input({
  IconSvg,
  placeholder,
  value,
  onChangeText,
  type = "text",
}: inputProps) {
  const [hideFieldContent, setHideFieldContent] = useState(false);

  function handleHidePass () {
    setHideFieldContent(!hideFieldContent);
  }

  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#268596" />

      <CustomInput
        placeholder={placeholder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={type === "password" && !hideFieldContent}
      />

      {type === "password" && (
        <HidePassButtton
          onPress={handleHidePass}
        >
          <MaterialCommunityIcons 
            name={!hideFieldContent ? "eye" : "eye-off"} 
            size={20}
            color="#268596"
          />
        </HidePassButtton>
      )}
    </InputArea>
  );
}

export default Input;
