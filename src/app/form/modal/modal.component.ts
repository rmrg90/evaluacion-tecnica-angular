import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() errors: Array<string>;
  @Input() valid: Observable<boolean>;
  @ViewChild('content') private content;

  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {
    this.valid.subscribe(value => {
      if (!value) {
        this.modalService.open(this.content);
      }
    });
  }

  public open = () => this.modalService.open(this.content);


}
