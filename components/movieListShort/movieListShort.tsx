import { FlatList, View, Text, StyleSheet } from "react-native";
import { movieItem } from "../movieItem/movieItem";
import { useEffect, useState } from "react";
import { apiMethods } from "../../services/apiService";
import { Movie } from "../../interfaces/interface";

interface MovieListShortProps {
  method: keyof typeof apiMethods;
  title: string;
}

export default function MovieListShort({ method, title }: MovieListShortProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    apiMethods[method]()
      .then((response) => {
        setMovies(response.data.items);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <View style={styles.listContainer}>
      <View style={styles.title}>
        <Text style={styles.titleGroup}>{title}</Text>
        <Text style={styles.titleLink}>Все</Text>
      </View>

      <FlatList
        data={movies}
        renderItem={movieItem}
        horizontal={true}
        keyExtractor={(item) => item.kinopoiskId.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 10,
    paddingVertical: 20,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  titleGroup: { fontSize: 20, fontWeight: "bold", color: "white" },
  titleLink: { fontSize: 20, fontWeight: "bold", color: "#e56700" },
});
