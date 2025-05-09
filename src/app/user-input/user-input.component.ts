import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnnualData } from '../app.model';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Input() initial!: number;
  @Input() annual!: number;
  @Input() expected!: number;
  @Input() duration!: number;
  @Output() result = new EventEmitter<AnnualData[]>();
  onSubmit() {
    const annualData = [];
    let investmentValue = this.initial;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expected / 100);
      investmentValue += interestEarnedInYear + this.annual;
      const totalInterest = investmentValue - this.annual * year - this.initial;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annual,
        totalInterest: totalInterest,
        totalAmountInvested: this.initial + this.annual * year,
      });
      this.result.emit(annualData);
    }
  }
}
