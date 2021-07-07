import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  subText: string;
  mainText: string;
  operand1: number;
  operand2: number;
  operator: string;
  operatorSet: any;
  enable: any;


  constructor(private operationsService: OperationsService) {    
    this.subText = '';
    this.mainText = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = '';
  }

  ngOnInit(): void {
    this.operatorSet = false;
    this.enable = true;
  }



  pressKey(key: string) {
    if(this.enable){
      if(Number(key) || key === '.' || key === '0'){
        this.mainText += key;
      }
      else if(key === '√' || key === 'sin ' || key === 'cos ' || key === 'tan ' || key === 'ln '){
        if(!this.operatorSet){
          this.operatorSet = true;
          this.operator = key;
          this.mainText += key;         
        }

        return;
      }
      else if(key === '+' || key === '-' || key === 'x' || key === '÷' || key === '^'){
        if(!this.operatorSet){
          this.operand1 = Number(this.mainText);
          this.operator = key;
          this.operatorSet = true;
          this.mainText += key;    
        }
      }      
    }
  }

  allClear() {
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
    this.enable = true;
    this.operator = '';
  }

  // Operations

  Sum(num1: number, num2: number): void{
    this.operationsService.sum(num1, num2).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Subtraction(num1: number, num2: number): void{
    this.operationsService.subtraction(num1, num2).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Multiplication(num1: number, num2: number): void{
    this.operationsService.multiplication(num1, num2).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Division(num1: number, num2: number): void{
    this.operationsService.division(num1, num2).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Pow(num1: number, num2: number): void{
    this.operationsService.pow(num1, num2).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Cos(num1: number): void{
    this.operationsService.cos(num1).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Sin(num1: number): void{
    this.operationsService.sin(num1).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Tan(num1: number): void{
    this.operationsService.tan(num1).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Sqrt(num1: number): void{
    this.operationsService.sqrt(num1).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  Ln(num1: number): void{
    this.operationsService.ln(num1).subscribe(result => {
      this.mainText = JSON.stringify(result);
    })  
  }

  // Result

  getAnswer() {
    if(this.enable){
      this.enable = false;
      this.operand2 = Number(this.mainText.split(this.operator)[1]);
      this.subText = this.mainText;

      if (this.operator === '÷'){
        if (this.operand2 == 0){
          this.mainText = 'ERROR';
          this.subText = 'Math';

          return;
        }

        this.Division(this.operand1, this.operand2);
      }
      else if (this.operator === 'ln '){
        if (this.operand2 == 0){
          this.mainText = 'ERROR';
          this.subText = 'Math';

          return;
        }
        else if(this.operand2 == 1){
          this.mainText = '0';
          
          return;
        }

        this.Ln(this.operand2);
      }
      else{

        switch(this.operator){
          case '+':
            this.Sum(this.operand1, this.operand2);
            break;
          case '-':
            this.Subtraction(this.operand1, this.operand2);
            break;
          case 'x':
            this.Multiplication(this.operand1, this.operand2);
            break;
          case '^':
            this.Pow(this.operand1, this.operand2);
            break;
          case '√':
            this.Sqrt(this.operand2);
            break;
          case 'sin ':
            this.Sin(this.operand2);
            break;
          case 'cos ':
            this.Cos(this.operand2);
            break;
          case 'tan ':
            this.Tan(this.operand2);
            break;
          
          default:
            console.log("End.");  
        }
      }
    }
  }
}
