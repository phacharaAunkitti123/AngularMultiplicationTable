import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css',]
})
export class MultiplicationComponent {
  multiplier: number = 1;
  multiplicationTable: any[] = [];

  generateTable() {
    this.multiplicationTable = [];

    for (let multiplication = 1; multiplication <= 12; multiplication++) {
      const product = this.multiplier * multiplication;
      this.multiplicationTable.push({ multiplication, product });
    }
  }
}
