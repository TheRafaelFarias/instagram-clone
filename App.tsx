import {
  BottomTabBarOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { Entypo, FontAwesome, Feather } from "@expo/vector-icons";
import { IconsType, StackParamList, TabParamList } from "./types";
import { StatusBar, TouchableOpacity } from "react-native";
import { BottomTabBar } from "./styles";
import { theme } from "./common";
import { ThemeProvider } from "styled-components/native";
import ProfileScreen, { ProfilePostsScreen } from "./screens/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<StackParamList>();

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  const convertSelectedTheme = () => {
    switch (selectedTheme) {
      case "dark":
        return theme.dark;
      case "light":
        return theme.light;
    }
  };

  const getTabsComponent = () => {
    return (
      <Tabs
        background={convertSelectedTheme().background}
        textColor={convertSelectedTheme().text}
      />
    );
  };

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={convertSelectedTheme().background}
        barStyle={selectedTheme == "light" ? "dark-content" : "light-content"}
      />
      <ThemeProvider theme={convertSelectedTheme()}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={getTabsComponent}
          />
          <Stack.Screen
            name="ProfilePostsScreen"
            options={{ headerTitle: "Posts" }}
            component={ProfilePostsScreen}
            initialParams={{ photoID: 1 }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const icons = {
  Home: {
    lib: Entypo,
    name: "home",
  },
  Search: {
    lib: FontAwesome,
    name: "search",
  },
  Create: {
    lib: Feather,
    name: "plus-square",
  },
  Shop: {
    lib: Feather,
    name: "shopping-bag",
  },
  Profile: {},
};

const Tabs = ({
  background,
  textColor,
}: {
  background: string;
  textColor: string;
}) => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: background }}
      tabBar={(props) => (
        <BottomTab {...props} background={background} textColor={textColor} />
      )}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Create" component={HomeScreen} />
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const BottomTab: React.FC<
  BottomTabBarProps<
    BottomTabBarOptions & { background: string; textColor: string }
  >
> = ({ state, navigation, background, textColor }) => {
  return (
    <BottomTabBar style={{ flexDirection: "row", backgroundColor: background }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const { lib: Icon, name } = icons[route.name as IconsType];

        const renderIcon = () => {
          if (route.name == "Profile") {
            return <Feather name="circle" color="#a7a7a7" size={25} />;
          }

          return (
            <Icon
              name={name as any}
              color={isFocused ? textColor : "#a7a7a7"}
              size={25}
            />
          );
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            key={route.name.toLocaleLowerCase()}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {renderIcon()}
          </TouchableOpacity>
        );
      })}
    </BottomTabBar>
  );
};
