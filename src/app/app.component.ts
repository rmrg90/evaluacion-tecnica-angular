import { Component } from '@angular/core';
import {Field} from './model/field';
import {FieldType} from './model/field-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evaluacion-tecnica-angular';
  public form: Array<Field>;

  constructor() {
    this.form = [new Field(FieldType.TEXT, '', 'Nombre', 1),
      new Field(FieldType.MAIL, '', 'E-mail', 2),
      new Field(FieldType.PHONE, '', 'Teléfono', 3),
      new Field(FieldType.DATE, '', 'Fecha', 4),
      new Field(FieldType.CITY, '', 'Ciudad y Estado', 5),
      new Field(FieldType.TEXT, '', '11', 6)];
  }
}
