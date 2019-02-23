import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LottoService } from '../lotto.service';
import { Lotto } from '../lotto';


@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css']
})
export class LottoComponent implements OnInit {
  title = "Lotto";
  formGroup: FormGroup;

  result: Lotto[] = [];


  constructor(private formBuilder: FormBuilder, private lottoService: LottoService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      period: ['', Validators.required],
      lottoNumber: ['', Validators.required],
    });

    this.result=this.lottoService.getAll();

  }

  checkLotto() {
    if (this.formGroup.invalid) {
      alert("Error !!!")
    }
  }

}

