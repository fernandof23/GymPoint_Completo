import React from 'react';
import PropTypes from 'prop-types';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CheckIn from '~/pages/CheckIn';
import SignIn from '~/pages/SignIn';
import AllQuestions from '~/pages/HelpSystem/AllQuestions';
import ReplYQuestions from '~/pages/HelpSystem/ReplyQuestions';
import MakeQuestions from '~/pages/HelpSystem/MakeQuestion';

const tabBarIconHelp = ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
);

const tabBarIconCheck = ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
);

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                }),
                App: createBottomTabNavigator(
                    {
                        CheckIn: {
                            screen: createStackNavigator(
                                {
                                    CheckIn,
                                },
                                {
                                    defaultNavigationOptions: {
                                        headerTransparente: false,
                                        headerTintColor: '#000',
                                        headerTitleAlign: 'center',
                                        headerLeftContainerStyle: {
                                            marginLeft: 20,
                                        },
                                    },
                                }
                            ),
                            navigationOptions: {
                                tabBarVisible: true,
                                tabBarLabel: 'Check-ins',
                                activeTintColor: '#ee4e62',
                                inactiveTintColor: '#999',
                                tabBarIcon: tabBarIconCheck,
                            },
                        },
                        new: {
                            screen: createStackNavigator(
                                {
                                    AllQuestions,
                                    ReplYQuestions,
                                    MakeQuestions,
                                },
                                {
                                    defaultNavigationOptions: {
                                        headerTransparent: false,
                                        headerTintColor: '#000',
                                        headerTitleAlign: 'center',
                                        headerLeftContainerStyle: {
                                            marginLeft: 20,
                                        },
                                    },
                                }
                            ),
                            navigationOptions: {
                                tabBarVisible: true,
                                tabBarLabel: 'Pedir Ajuda',
                                activeTintColor: '#ee4e62',
                                inactiveTintColor: '#999',
                                tabBarIcon: tabBarIconHelp,
                            },
                        },
                    },
                    {
                        resetOnBlur: true,
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#ee4e62',
                            inactiveTintColor: '#999',
                            style: {
                                backgroundColor: '#fff',
                            },
                            headerTitleStyle: {
                                alignSelf: 'center',
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            }
        )
    );

tabBarIconCheck.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

tabBarIconHelp.propTypes = {
    tintColor: PropTypes.string.isRequired,
};
