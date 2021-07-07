import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Highlight } from "../../common";

export const Navbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.background};
`;

export const UserID = styled(Highlight)`
  font-size: 20px;
`;

export const UserImage = styled.Image`
  border-radius: 100px;
`;

export const UserInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.background};
`;

export const UserInformation = styled.View`
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const UserBio = styled.View`
  padding: 10px 20px;

  background-color: ${(props) => props.theme.background};
`;

export const UserButtons = styled.View`
  padding: 10px 0px;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.theme.background};
`;

export const UserButton = styled.TouchableOpacity<{ isFollowing?: boolean }>`
  width: 45%;
  padding: 5px 0px;
  border-radius: 5px;

  background-color: ${(props) =>
    props.isFollowing ? props.theme.primary : props.theme.background};
  border: ${(props) =>
    props.isFollowing ? "none" : `1px solid ${props.theme.textFaded}`};
`;

export const UserButtonText = styled.Text<{ isFollowing?: boolean }>`
  text-align: center;
  font-weight: ${(props) => (props.isFollowing ? "700" : "500")};
  color: ${(props) => (props.isFollowing ? "white" : props.theme.text)};
`;

export const Posts = styled.FlatList`
  background: ${(props) => props.theme.background};
` as unknown as typeof FlatList;

export const PostsContainer = styled.View`
  padding: 1px;
`;

export const ProfilePostsScreenContainer = styled.View`
  background-color: ${(props) => props.theme.background};
`;
