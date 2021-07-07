import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../components/Post";
import {
  LogoImage,
  PaperPlaneIcon,
  StatusBarContainer,
} from "../styles/screens/HomeScreen";

const HomeScreen = () => {  
  return (
    <>
      <SafeAreaView>
        <StatusBarContainer>
          <LogoImage
            source={require("../assets/logo.png")}
            resizeMode="contain"
          />
          <PaperPlaneIcon name="paper-plane" size={20} />
        </StatusBarContainer>
        <ScrollView>
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </SafeAreaView> 
    </>
  );
};

export default HomeScreen;
