import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
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

  constructor() { }

  ngOnInit() {
  }

}
