import { Text, View } from "react-native";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: "white" }}>
        {`Red: ${red}, Green: ${green}, Blue: ${blue}`}
      </Text>
    </View>
  );
} 