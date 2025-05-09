import { Injectable } from '@angular/core';
import { AnnualData } from './app.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  result: AnnualData[] = [];

  calculateInvestmentResult(data: {
    initial: number;
    annual: number;
    expected: number;
    duration: number;
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
    }
    this.result = annualData;
  }
}
