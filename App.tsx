import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MovieListShort from "./components/movieListShort/movieListShort";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const { width } = Dimensions.get("window");
  const handlePress = () => {
    console.log("Кнопка нажата!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="black" />
      <View style={styles.stickyHeader}></View>
      <ScrollView style={styles.container}>
        <View>
          <View style={{ position: "relative" }}>
            <Image
              style={{ width: width, height: 400 }}
              source={{
                uri: "https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg",
              }}
            />
            <LinearGradient
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)", "rgba(0,0,0,1)"]}
              locations={[0, 0.5, 1]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 400,
              }}
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Смотреть</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
        </View>
        <MovieListShort method="getPremiers" title="Новинки 2024" />
        <MovieListShort method="getFilms" title="Фильмы для вас" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "black",
    zIndex: 1,
  },
  button: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(225, 77, 9, 0.8)",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#252525",
    marginVertical: 20,
  },
});
