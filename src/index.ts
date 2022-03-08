import Match from "./classes/Match";

export default function createMatch(matchId: string) {
  return new Match(matchId);
}
