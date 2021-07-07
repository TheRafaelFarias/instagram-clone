import "styled-components";
import { CompositeNavigationProp } from "@react-navigation/core";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";

export type IconsType = "Home" | "Search" | "Create" | "Shop";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    textFaded: string;
    background: string;
    primary: string;
  }
}

export type StackParamList = {
  Home: undefined
  ProfilePostsScreen: {
    photoID: number;
  };
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Create: undefined;
  Shop: undefined;
  Profile: undefined;
};

export type BottomTabNavigationType<page = string> = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, page>,
  StackNavigationProp<StackParamList>
>;

export type StackNavigationType<page = string> =
  CompositeNavigationProp<
    StackNavigationProp<StackParamList, page>,
    BottomTabNavigationProp<TabParamList>
  >;
