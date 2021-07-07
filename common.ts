import styled from "styled-components/native";

export const Highlight = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const IText = styled.Text`
  color: ${(props) => props.theme.text};
`;

export const TextFaded = styled.Text`
  color: ${(props) => props.theme.textFaded};
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const theme = {
  light: {
    text: "#262626",
    textFaded: "#999999",
    background: "#FFFFFF",
    primary: "#0195F7",
  },
  dark: {
    text: "#FAFAFA",
    textFaded: "#979797",
    background: "#000000",
    primary: "#0195F7",
  },
};
