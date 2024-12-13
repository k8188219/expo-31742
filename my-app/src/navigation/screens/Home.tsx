import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

let mountedCount = 0;

export function Home({
  setSafe,
}: {
  setSafe: (fn: (b: boolean) => boolean) => void;
}) {
  // use Ref to prevent setCount updates and renders different mountedCount
  const ref = useRef(mountedCount);

  useEffect(() => {
    console.error("mounted");
    mountedCount++;

    return () => {
      console.error("un-mounted");
    };
  }, []);

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>index.tsx</Text>
      <Text style={{ fontSize: 36, color: "red" }}>
        Mounted {ref.current} times
      </Text>
      <Button
        title={`Presssed ${count} times`}
        onPress={() => {
          setCount((v) => v + 1);
        }}
      />
      <Button
        title={`toggle safe area`}
        onPress={() => {
          setSafe((v) => !v);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
