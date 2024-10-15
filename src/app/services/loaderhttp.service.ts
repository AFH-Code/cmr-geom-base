import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderhttpService {
  private dataSource = new BehaviorSubject<boolean>(false);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any) {
    this.dataSource.next(data);
  }

  getCurrentUser(data: any){
    return data;
  }
}
