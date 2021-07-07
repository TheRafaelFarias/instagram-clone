import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";

export const StatusBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 0px;
  background-color: ${(props) => props.theme.background};
`;

export const LogoImage = styled.Image`
  width: 100px;
  height: 50px;
  align-self: flex-start;
`;

export const PaperPlaneIcon = styled(Fontisto)`
  transform: rotate(15deg);
  padding-bottom: 10px;
`;
