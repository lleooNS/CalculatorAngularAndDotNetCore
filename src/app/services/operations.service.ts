import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  urlSum = 'http://localhost:5000/api/sum';
  urlSubtraction = 'http://localhost:5000/api/subtraction';
  urlMultiplication = 'http://localhost:5000/api/multiplication';
  urlDivision = 'http://localhost:5000/api/division';
  urlPow = 'http://localhost:5000/api/pow';
  urlCos = 'http://localhost:5000/api/cos';
  urlSin = 'http://localhost:5000/api/sin';
  urlTan = 'http://localhost:5000/api/tan';
  urlSqrt = 'http://localhost:5000/api/sqrt';
  urlLn = 'http://localhost:5000/api/ln';

  constructor(private http: HttpClient) { }

  sum(num1: number, num2: number)
  {
    return this.http.get(`${this.urlSum}/${num1}/${num2}`); 
  }

  subtraction(num1: number, num2: number)
  {
    return this.http.get(`${this.urlSubtraction}/${num1}/${num2}`); 
  }

  multiplication(num1: number, num2: number)
  {
    return this.http.get(`${this.urlMultiplication}/${num1}/${num2}`);
  }

  division(num1: number, num2: number)
  {
    return this.http.get(`${this.urlDivision}/${num1}/${num2}`); 
  }

  pow(num1: number, num2: number)
  {
    return this.http.get(`${this.urlPow}/${num1}/${num2}`); 
  }

  cos(num1: number)
  {
    return this.http.get(`${this.urlCos}/${num1}`); 
  }

  sin(num1: number)
  {
    return this.http.get(`${this.urlSin}/${num1}`); 
  }

  tan(num1: number)
  {
    return this.http.get(`${this.urlTan}/${num1}`); 
  }

  sqrt(num1: number)
  {
    return this.http.get(`${this.urlSqrt}/${num1}`); 
  }

  ln(num1: number)
  {
    return this.http.get(`${this.urlLn}/${num1}`); 
  }

}
