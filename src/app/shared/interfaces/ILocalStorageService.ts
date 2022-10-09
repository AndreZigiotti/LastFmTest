export interface ILocalStorageService {
  set(key: string, value: any): void
  get(key: string): any
}
