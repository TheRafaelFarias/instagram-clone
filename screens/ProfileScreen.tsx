import React, { useCallback, useState } from "react";
import { Highlight, IText } from "../common";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { BottomTabNavigationType, StackParamList } from "../types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { ProfileImagesData } from "../data"
import {
  LogBox,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import {
  Navbar,
  Posts,
  PostsContainer,
  ProfilePostsScreenContainer,
  UserBio,
  UserButton,
  UserButtons,
  UserButtonText,
  UserID,
  UserImage,
  UserInformation,
  UserInformations,
} from "../styles/screens/ProfileScreen";
import Post from "../components/Post";

const { width } = Dimensions.get("window");

// I didn't found how to resolve the warning of "VirtualizedLists should never be nested inside plain ScrollViews shoud" although it works fine (it doesn't get the performance benefits from the FlatList)
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

const ProfileScreen = () => {
  const navigation = useNavigation<BottomTabNavigationType<"Profile">>();
  const [isFollowing, setIsFollowing] = useState(true);

  const renderItem = (item: typeof ProfileImagesData[0]) => (
    <Pressable
      onPress={() =>
        navigation.navigate("ProfilePostsScreen", {
          photoID: item.id,
        })
      }
    >
      <PostsContainer>
        <Image
          resizeMode="cover"
          source={{ uri: item.uri }}
          style={{ width: width / 3, height: width * 0.31 }}
        />
      </PostsContainer>
    </Pressable>
  );

  return (
    <>
      <Navbar>
        <UserID>fariasdev</UserID>
        <Ionicons name="ios-menu-sharp" size={30} color="#262626" />
      </Navbar>
      <ScrollView>
        <UserInformations>
          <UserImage
            style={{ width: 100, height: 100 }}
            source={require("../assets/linuxtechtips-profile.jpg")}
          />
          <UserInformation>
            <Highlight>500</Highlight>
            <IText>Posts</IText>
          </UserInformation>
          <UserInformation>
            <Highlight>153K</Highlight>
            <IText>Followers</IText>
          </UserInformation>
          <UserInformation>
            <Highlight>468</Highlight>
            <IText>Following</IText>
          </UserInformation>
        </UserInformations>
        <UserBio>
          <Highlight>Farias Dev</Highlight>
          <IText>The best place to get tech memes</IText>
        </UserBio>
        <UserButtons>
          <UserButton
            isFollowing={isFollowing}
            activeOpacity={0.8}
            onPress={() => setIsFollowing(!isFollowing)}
          >
            <UserButtonText isFollowing={isFollowing}>
              {isFollowing ? "Following" : "Follow"}
            </UserButtonText>
          </UserButton>
          <UserButton>
            <UserButtonText>Message</UserButtonText>
          </UserButton>
        </UserButtons>
        <Posts
          numColumns={3}
          data={ProfileImagesData}
          renderItem={({ item }) => renderItem(item)}
        />
      </ScrollView>
    </>
  );
};

type ProfilePostsScreenProps = StackScreenProps<
  StackParamList,
  "ProfilePostsScreen"
>;

export const ProfilePostsScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParamList, "ProfilePostsScreen">>();
  const { photoID } = route.params;

  const renderPost = useCallback((item: typeof ProfileImagesData[0]) => {
    return <Post uri={item.uri} />;
  }, []);

  const keyExtractor = useCallback(
    (item: typeof ProfileImagesData[0]) => item.id.toString(),
    []
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 637.3,
      offset: 637.3 * index,
      index,
    }),
    []
  );

  const renderPosts = () => {
    return (
      <FlatList
        style={{ paddingTop: 10 }}
        numColumns={1}
        data={ProfileImagesData}
        removeClippedSubviews
        maxToRenderPerBatch={4}
        windowSize={2}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        initialScrollIndex={photoID - 1}
      />
    );
  };

  return (
    <ProfilePostsScreenContainer>{renderPosts()}</ProfilePostsScreenContainer>
  );
};

export default ProfileScreen;
