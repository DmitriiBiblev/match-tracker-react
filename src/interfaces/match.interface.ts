import { TStatus } from '../types';

interface Player {
  kills: number;
  username: string;
}

interface Team {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

export interface IMatch {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: TStatus;
  time: string;
  title: string;
}