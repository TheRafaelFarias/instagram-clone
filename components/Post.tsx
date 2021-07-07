import React, { useState } from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import {
  PostContainer,
  ActionsButtonsContainer,
  InfoContainer,
  UserInformationContainer,
  CommentBubbleIcon,
  LeftIcons,
  UserProfile,
} from "../styles/screens/components/Post";
import { Highlight, IText, RowView, TextFaded } from "../common";
import { PaperPlaneIcon } from "../styles/screens/HomeScreen";

const { width } = Dimensions.get("window");

type PostProps = {
  postKey?: number;
  uri?: string;
};

const Post = (props: PostProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <PostContainer key={props.postKey}>
      <UserInformationContainer>
        <RowView>
          <UserProfile
            style={{ width: 30, height: 30 }}
            source={require("../assets/linuxtechtips-profile.jpg")}
          />
          <Highlight>linuxtechtips</Highlight>
        </RowView>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={20}
          color="#262626"
        />
      </UserInformationContainer>
      <Image
        source={
          props.uri != null
            ? { uri: props.uri }
            : require("../assets/tmp-post-2.jpg")
        }
        style={{ width: width, height: width }}
        width={width}
      />
      <InfoContainer>
        <ActionsButtonsContainer>
          <LeftIcons>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setLiked(!liked)}
            >
              {!liked ? (
                <AntDesign name="hearto" size={20} color="#262626" />
              ) : (
                <AntDesign name="heart" size={20} color="#ee515e" />
              )}
            </TouchableOpacity>
            <CommentBubbleIcon
              name="chatbubble-outline"
              size={20}
              color="#262626"
              borderWidth={20}
            />
            <PaperPlaneIcon name="paper-plane" size={20} color="#262626" />
          </LeftIcons>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setIsBookmarked(!isBookmarked)}
          >
            {!isBookmarked ? (
              <FontAwesome name="bookmark-o" size={23} color="#262626" />
            ) : (
              <FontAwesome name="bookmark" size={23} color="#262626" />
            )}
          </TouchableOpacity>
        </ActionsButtonsContainer>
        <IText>
          Liked by <Highlight>fariasdev</Highlight> and{" "}
          <Highlight>thousands of others</Highlight>
        </IText>
        <IText>
          <Highlight>fariasdev</Highlight> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </IText>
        <TouchableOpacity>
          <TextFaded>View all 14 comments</TextFaded>
        </TouchableOpacity>
      </InfoContainer>
    </PostContainer>
  );
};

export default Post;
