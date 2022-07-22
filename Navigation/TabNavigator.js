import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import CreatePost from '../screens/CreatPost';
import { RFValue } from "react-native-responsive-fontsize";
import Feed from '../screens/Feed';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'CreatePost') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={RFValue(30)} color={color} style={styles.icons}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#1f549d",
    height: "8%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
    marginTop:-4
  }
});

export default BottomTabNavigator;
