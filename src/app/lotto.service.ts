import { Injectable } from '@angular/core';
import { Lotto } from './lotto';

@Injectable({
  providedIn: 'root'
})
export class LottoService {

  constructor() { }

  getAll(): Lotto[] {
    return [
      { period: "20190201", bigPrize: "123456", lastThreeDigitPrize: "456" },
      { period: "20190201", bigPrize: "654123", lastThreeDigitPrize: "789" }
    ];
  }
}
