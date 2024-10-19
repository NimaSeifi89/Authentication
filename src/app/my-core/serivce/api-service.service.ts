import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_SERVER = 'https://accounts.mail.ir/app';

  constructor(private httpClient: HttpClient) { }

  /**
   * Read infomation from the databse
   */
  get(apiName: string): Observable<any> {
    return this.httpClient.get<any>
      (`${this.API_SERVER}/${apiName}`);
  }


  /**
   * Add information to the databse
   */
  save(entityName: string, data: any) {

  }

  /**
   * Update Database information
   */
  update(data: any) {

  }

  /**
   * Delete Databse information
   */
  delete(id: number) {


  }

  /**
   * Return Errors when transferring information from client to server OR server to client
   */
  public handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return console.log(errMsg);
  }
}
