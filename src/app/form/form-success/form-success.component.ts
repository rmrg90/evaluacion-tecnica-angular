import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {FieldType} from '../../model/field-type.enum';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form-success',
  templateUrl: './form-success.component.html',
  styleUrls: ['./form-success.component.css']
})
export class FormSuccessComponent implements OnInit {

  @Input() form: Array<Field>;

  constructor() { }

  ngOnInit() {


  }

}
