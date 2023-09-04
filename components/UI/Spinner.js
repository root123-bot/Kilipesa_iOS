import { View, ActivityIndicator, StatusBar } from "react-native";

function LoadingSpinner() {
  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    </>
  );
}

export default LoadingSpinner;
