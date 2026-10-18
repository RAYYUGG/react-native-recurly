import {View, Text} from 'react-native'
import {cssInterop} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
cssInterop(RNSafeAreaView, {className: "style"});
export const SafeAreaView = RNSafeAreaView;
import React from 'react'
import { Link } from 'expo-router'

const Insights = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Insights</Text>
        </SafeAreaView>
    )
}
export default Insights