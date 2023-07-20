import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private url: string = 'https://po-sample-api.fly.io/v1/menus';

  constructor(private http: HttpClient) {}

  getFilteredData(search: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { search };

    return this.http.get(this.url, { params }).pipe(map((response: any) => response.items));
  }
}
