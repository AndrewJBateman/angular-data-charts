import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  sessionStorage: Storage;

  constructor() {
    this.sessionStorage = window.sessionStorage;
  }

  set(key: string, data: any): boolean {
    if (this.isSupported) {
      try {
        sessionStorage.setItem(key, JSON.stringify(data));
        return true;
      } catch (err) {
        console.error('Error saving to localStorage', err);
        return false;
      }
    }
    return false;
  }

  get(key: string): any {
    if (this.isSupported) {
      try {
        return JSON.parse(sessionStorage.getItem(key));
      } catch (err) {
        console.error('Error getting data from session Storage', err);
        return null;
      }
    }
    return null;
  }

  get isSupported(): boolean {
    return !!this.sessionStorage;
  }

  clear(): void {
    sessionStorage.clear();
  }
}
