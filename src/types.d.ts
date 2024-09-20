export interface Movie {
    total:   number;
    entries: Movie[];
}

export interface Movie {
    title:       string;
    description: string;
    programType: ProgramType;
    images:      Images;
    releaseYear: number;
}

export interface Images {
    posterArt: PosterArt;
}

export interface PosterArt {
    url:    string;
    width:  number;
    height: number;
}

export enum ProgramType {
    Movie = "movie",
    Series = "series",
}
