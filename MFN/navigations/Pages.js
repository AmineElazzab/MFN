import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Landing from "../pages/Landing";
import Company from "../pages/Company"
// import MapScreen from "../pages/MapScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, } from 'react-native';



const Tab = createMaterialBottomTabNavigator();
const PageStack = createNativeStackNavigator();

function Pages() {
    <PageStack.Navigator>
        <PageStack.Screen
            name="Landing"
            component={Landing}
        />
        {/* <PageStack.Screen
            name="Map"
            component={MapScreen}
        /> */}
    </PageStack.Navigator>

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 20,
                height: 50,
            }}
            screenOptions=
            {({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            :
                            'home';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'perm-identity' : 'perm-identity';
                    } else if (
                        route.name === 'Company') {
                        iconName = focused ? 'business' : 'business';
                    }

                    // return <Ionicons name={iconName} size={size} color={color} />;
                    return (
                        <View
                            style={{
                                width: 25,
                                height: 25,
                                borderRadius: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    // width: 25,
                                    // height: 25,
                                    // borderRadius: 15,
                                    // backgroundColor: focused ? 'tomato' : 'gray',
                                }}
                            >
                                <Icon
                                    name={iconName}
                                    size={25}
                                    color={focused ? 'white' : 'black'}
                                />
                                {focused && (
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: 10,
                                            height: 10,
                                            borderRadius: 5,
                                            backgroundColor: 'white',
                                        }}
                                    />
                                )}
                            </View>
                        </View>
                    )
                },
                tabBarActiveTintColor: '#20B08E',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    display: 'flex',
                    height: 45,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}

            />
            <Tab.Screen
                name="Company"
                component={Company}

            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                
            />

        </Tab.Navigator>
    )
}

export default Pages;