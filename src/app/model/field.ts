import {FieldType} from './field-type.enum';

export class Field {
  constructor(public type: FieldType,
              public value: string,
              public label: string,
              public index: number) {}
}
