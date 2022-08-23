import {Component, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {CalculatorService} from "./calculator.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {HistoryService} from "../History/history.service";
import {HistoryComponent} from "../History/history.component";

@Component({
  selector: 'calculator',
  templateUrl: 'calculator.component.html',
})

export class CalculatorComponent implements OnInit{
  formData: FormGroup = new FormGroup({});
  result: object | undefined;
  private errorMessage: any;

  @Output() historyCalculations: any[] = [];


  constructor(private calculatorService: CalculatorService) {
  }

  ngOnInit() {
    this.formData = new FormGroup({
      number1: new FormControl(),
      number2: new FormControl(),
      operator: new FormControl()
    })
  }

  onSubmit(form: NgForm) {
    if(this.validNumbers(form)){
      this.getResult(form)
    }
  }

  getResult(data: NgForm) {
    this.calculatorService.getResult(data).subscribe({
      next: result => {
        this.result = result;
        this.historyCalculations.push(result);
      },
      error: err => this.errorMessage = err
    })
    window.location.reload();
  }

  validNumbers(data: NgForm){
    return true;
  }
}
