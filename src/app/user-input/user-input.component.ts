import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnnualData } from '../app.model';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentResultsService: InvestmentResultsService) {}

  @Input() initial!: number;
  @Input() annual!: number;
  @Input() expected!: number;
  @Input() duration!: number;

  onSubmit() {
    this.investmentResultsService.calculateInvestmentResult({
      initial: this.initial,
      annual: this.annual,
      expected: this.expected,
      duration: this.duration,
    });
  }
}
