interface IRoom {
  members: Array<string>,
  cards: Array<string>,
  type: 'NORMAL' | 'PREMIUM',
  name?: string;
}