export interface Joke {
  id: number;
  type: "single" | "twopart";
  category: string;
  setup?: string; // Used in twopart
  delivery?: string; // Used in twopart
  joke?: string; // Used in single
  safe: boolean;
  lang: string;
}

// You can also define the API response itself
export interface JokeResponse {
  error: boolean;
  amount: number;
  jokes: Joke[];
}
