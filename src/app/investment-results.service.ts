import { Injectable, signal } from '@angular/core';
import { AnnualData } from './investment-results.model';

@Injectable({ providedIn: 'root' })
export class investmentResultsService {
  result = signal<AnnualData[]>([]);

  calculateInvestmentResult(data: {
    initial: number;
    duration: number;
    expected: number;
    annual: number;
  }) {
    const annualData = [];
    let investmentValue = data.initial;
    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expected / 100);
      investmentValue += interestEarnedInYear + data.annual;
      const totalInterest = investmentValue - data.annual * year - data.initial;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annual,
        totalInterest: totalInterest,
        totalAmountInvested: data.initial + data.annual * year,
      });
      this.result.set(annualData);
    }
  }
}
