export interface TypesenseKeys {
  host: string;
  apiKey: string;
  indexName: string;
  preset: string;
}

export interface AlgoliaKeys {
  apiKey: string;
  indexName: string;
  appId: string;
}

export type Hit<Type> = {
  __position: number;
  __queryID?: string;
  objectID: string;
  _highlightResult?: any;
  _snippetResult?: any;
  _rankingInfo?: {
    promoted: boolean;
    nbTypos: number;
    firstMatchedWord: number;
    proximityDistance?: number;
    geoDistance: number;
    geoPrecision?: number;
    nbExactWords: number;
    words: number;
    filters: number;
    userScore: number;
    matchedGeoLocation?: {
      lat: number;
      lng: number;
      distance: number;
    };
  };
  _distinctSeqID?: number;
  _geoloc?: any;
} & { [x: string]: Type };
