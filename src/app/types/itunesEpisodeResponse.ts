export interface ItunesEpisodeResponse {

  // artistIds: any[];

  artworkUrl600: string;

  collectionViewUrl: string;

  episodeFileExtension: string;

  episodeContentType: string;

  trackTimeMillis: number;

  artworkUrl160: string;

  genres: Genre[];

  episodeGuid: string;
  trackId: number;

  trackName: string;

  releaseDate: Date;

  feedUrl: string;

  shortDescription: string;

  closedCaptioning: string;

  collectionId: number;

  collectionName: string;

  kind: string;

  wrapperType: string;

  description: string;

  country: string;

  previewUrl: string;

  artworkUrl60: string;

  contentAdvisoryRating: string;

  trackViewUrl: string;

  episodeUrl: string;
}

export interface Genre {
  id: number;
  name: string;
}
