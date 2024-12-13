import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as React from "react";
import { Home } from "./navigation/screens/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

// SplashScreen.preventAutoHideAsync();

// export function App() {
//   return (
//     <Navigation
//       linking={{
//         enabled: 'auto',
//         prefixes: [
//           // Change the scheme to match your app's scheme defined in app.json
//           'helloworld://',
//         ],
//       }}
//       onReady={() => {
//         SplashScreen.hideAsync();
//       }}
//     />
//   );
// }

export function App() {
  const [safe, setSafe] = React.useState(true);

  if (safe) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#e6e6fa" }}>
          <Home setSafe={setSafe} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
  return <Home setSafe={setSafe} />;
}
