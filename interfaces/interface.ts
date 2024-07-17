export interface ApiResponse {
  total: number;
  totalPages?: number;
  items: Movie[];
}

export interface Movie {
  kinopoiskId: number;
  //   imdbId: string;
  nameRu: string;
  //   nameEn: string;
  //   nameOriginal: string;
  //   countries: Country[];
  //   genres: Genre[];
  ratingKinopoisk: number;
  //   ratingImdb: number;
  //   year: number;
  //   type: string;
  //   posterUrl: string;
  posterUrlPreview: string;
}

export interface Genre {
  genre: string;
}

export interface Country {
  country: string;
}
