import { ItunesProgramResponse } from './itunesProgramResponse';

export interface ItunesSearchListProgram {
  resultCount: number;

  results: ItunesProgramResponse[];
}
