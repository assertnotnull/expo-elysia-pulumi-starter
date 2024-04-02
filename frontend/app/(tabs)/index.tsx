import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { treaty } from "@elysiajs/eden";
import type { App } from "@backend/src/index";
import { useQuery } from "@tanstack/react-query";

export default function TabOneScreen() {
  const client = treaty<App>("localhost:3000");

  const { data: greeting, isPending } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const resp = await client.index.get();
      return resp.data;
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {isPending ? <Text>Loading...</Text> : <Text>{greeting}</Text>}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
