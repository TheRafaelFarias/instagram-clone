import styled from "styled-components/native";
import { Ionicons, Fontisto } from "@expo/vector-icons";

export const PostContainer = styled.View`
  background-color: ${(props) => props.theme.background};
`;

export const UserInformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 20px;
  padding-bottom: 20px;
`;

export const UserProfile = styled.Image`
  border-radius: 100px;
  margin-right: 15px;
`

export const InfoContainer = styled.View`
  padding: 10px 20px;
`;

export const ActionsButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const LeftIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
`;

export const CommentBubbleIcon = styled(Ionicons)`
  transform: scaleX(-1);
`;

export const PaperPlaneIcon = styled(Fontisto)`
  transform: rotate(15deg);
`;
