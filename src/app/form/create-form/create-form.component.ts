import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomParserFormatter} from '../../util/date-format';
import {LocationServiceService} from '../../services/location-service.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {NgForm} from '@angular/forms';


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
  public locations: Array<string>;
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public valid: BehaviorSubject<boolean>;
  public completed = false;

  constructor(private locationService: LocationServiceService) {
    this.valid = new BehaviorSubject<boolean>(true);
  }

  ngOnInit() {

  }

  submit(f: NgForm) {
    console.log(f.controls);
    this.valid.next(f.valid);
    if (f.valid) {
      this.completed = true;
    }
  }

  reloadLocations(term) {
    if (term.length >= 3) {
      return this.locationService.getLocations(term);
    } else {
      return new Observable<String>();
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.reloadLocations(term).pipe(
          catchError(() => {
            return of([]);
          }))
      )
    )

  public getFormValidity = (): Observable<boolean> => this.valid.asObservable();


}


