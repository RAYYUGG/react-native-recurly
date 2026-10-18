import {View, Text} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {cssInterop} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
cssInterop(RNSafeAreaView, {className: "style"});
export const SafeAreaView = RNSafeAreaView;

const Subscriptions = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Subscriptions</Text>
        </SafeAreaView>
    )
}
export default Subscriptions