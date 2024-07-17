import {
  ListRenderItem,
  Image,
  View,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
import { Movie } from "../../interfaces/interface";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2.4;

export const movieItem: ListRenderItem<Movie> = ({ item }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: item.posterUrlPreview }}
      style={styles.posterPreview}
    />
    {item.ratingKinopoisk && (
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{item.ratingKinopoisk}</Text>
      </View>
    )}

    <Text style={styles.title}>{item.nameRu}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginRight: 10,
  },
  posterPreview: {
    width: ITEM_WIDTH - 10,
    height: (ITEM_WIDTH - 10) * 1.5,
    borderRadius: 8,
  },
  title: {
    color: "white",
    marginTop: 5,
  },
  rating: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  ratingText: {
    color: "white",
  },
});
