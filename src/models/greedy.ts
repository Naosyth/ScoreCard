export type GreedyPlayer = {
  scores: Array<number>
}

export type GreedyScoreCard = { [key: string]: GreedyPlayer }

export type GreedyGame = {
  scoreCard: GreedyScoreCard
  targetScore: number
}
