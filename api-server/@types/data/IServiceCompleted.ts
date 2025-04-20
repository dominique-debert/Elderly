export default interface IServiceCompleted {
  requestId: string
  helperId: string
  completionDate: Date
  actualDuration?: number
  creatorComment?: string
  helperComment?: string
  creatorRating?: number
  helperRating?: number
  pointsExchanged?: number
}