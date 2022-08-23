import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

  private calculatorUrl = 'http://localhost:8080/api/v1/calculate/';
  operationUrl = {['x']: 'multiply',
                  ['/']: 'divide',
                  ['+']: 'add',
                  ['-']: 'subtract',
  };


  constructor(private http: HttpClient) {
  }

  getResult(data: NgForm): Observable<any[]>{
    // @ts-ignore
    return this.http.post<any[]>(this.calculatorUrl + this.operationUrl[JSON.parse(JSON.stringify(data)).operator], JSON.parse(JSON.stringify(data)))
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error accured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
