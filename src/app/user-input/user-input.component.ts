import { Component, output, signal } from '@angular/core';

import { AnnualData } from '../investment-results.model';
import { investmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentResultsService: investmentResultsService) {}
  initial = signal(0);
  annual = signal(0);
  expected = signal(0);
  duration = signal(0);

  onSubmit() {
    this.investmentResultsService.calculateInvestmentResult({
      initial: this.initial(),
      annual: this.annual(),
      expected: this.expected(),
      duration: this.duration(),
    });

    this.initial.set(0);
    this.annual.set(0);
    this.expected.set(0);
    this.duration.set(0);
  }
}
