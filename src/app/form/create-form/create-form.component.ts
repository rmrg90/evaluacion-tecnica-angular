import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomParserFormatter} from '../../util/date-format';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  ]
})
export class CreateFormComponent implements OnInit {

  @Input() form: Array<Field>;
  private date = new Date();
  currentDate = {day: this.date.getUTCDate(), month: this.date.getUTCMonth() + 1, year: this.date.getUTCFullYear()};
  minDate = {day: this.date.getUTCDate(), month: this.date.getUTCMonth() + 1, year: this.date.getUTCFullYear() - 100};


  constructor() {
  }

  ngOnInit() {
  }

  submit(f) {
    console.log(f);
  }

}


