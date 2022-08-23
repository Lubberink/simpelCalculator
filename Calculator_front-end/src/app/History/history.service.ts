import {NgForm} from "@angular/forms";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HistoryService{

  private calculatorUrl = 'http://localhost:8080/api/v1/calculate';

  constructor(private http: HttpClient) {
  }

  getResult(): Observable<any[]>{
    return this.http.get<any[]>(this.calculatorUrl).pipe(
      tap(data => console.log("got all")),
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
