export interface ICard {
  name: string;
  description: string;
  code: string;
  type: string;
  method: string;
  limitted: number;
  times?: number;
  logo?: string;
  image?: string;
}