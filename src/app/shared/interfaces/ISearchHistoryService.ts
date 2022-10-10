import { Observable } from "rxjs"

export interface ISearchHistoryService {
  history$: Observable<string[]>

  register(term: string): void
  delete(term: string): void
}
