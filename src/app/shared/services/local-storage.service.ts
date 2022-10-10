import { Injectable } from '@angular/core';
import { ILocalStorageService } from "../interfaces/ILocalStorageService";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements ILocalStorageService {

  constructor() { }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key: string) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }
}
