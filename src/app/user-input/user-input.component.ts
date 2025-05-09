import { Component, output, signal } from '@angular/core';

import { AnnualData } from '../investment-results.model';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initial = signal(0);
  annual = signal(0);
  expected = signal(0);
  duration = signal(0);
  result = output<AnnualData[]>();

  onSubmit() {
    const annualData = [];
    let investmentValue = this.initial();
    for (let i = 0; i < this.duration(); i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expected() / 100);
      investmentValue += interestEarnedInYear + this.annual();
      const totalInterest =
        investmentValue - this.annual() * year - this.initial();
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annual(),
        totalInterest: totalInterest,
        totalAmountInvested: this.initial() + this.annual() * year,
      });
      this.result.emit(annualData);
    }
    this.initial.set(0);
    this.annual.set(0);
    this.expected.set(0);
    this.duration.set(0);
  }
}
