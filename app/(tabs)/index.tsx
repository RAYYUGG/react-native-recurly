import "@/global.css"
import { Link } from "expo-router";
import {Text, View } from "react-native";
import {cssInterop} from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
cssInterop(RNSafeAreaView, {className: "style"});
export const SafeAreaView = RNSafeAreaView;

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
    <Link href="/onboarding" className="mt-4 rounded bg-primary text-white 
    p-4">Go to Onboarding</Link>
    <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white 
    p-4">Go to SignIn</Link>
    <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white 
    p-4">Go to SignUp</Link>

    <Link href="/">Spotify Subscriptions</Link>
    <Link href={{
      pathname: "/(tabs)/subscriptions/[id]",
      params: {id: "claude"}
    }}>
      Claude Max Subscriptions
    </Link>
    </SafeAreaView>
  );
}