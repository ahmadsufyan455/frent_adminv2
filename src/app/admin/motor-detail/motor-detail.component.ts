import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Motor } from 'src/app/models/motor.model';
import { MotorService } from 'src/app/services/motor.service';

@Component({
  selector: 'app-motor-detail',
  templateUrl: './motor-detail.component.html',
  styleUrls: ['./motor-detail.component.css']
})
export class MotorDetailComponent implements OnInit {
  @Input() motor?: Motor;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentMotor: Motor = {
    type: '',
    description: '',
    image: '',
    price: 0,
    quantity: 0,
    status: false
  };
  message = '';

  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
    this.message;
    this.currentMotor = {...this.motor}
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentMotor = { ...this.motor };
  }

  updatestatus(status: boolean): void {
    if (this.currentMotor.id) {
      this.motorService.updateMotor(this.currentMotor.id, { status: status })
      .then(() => {
        this.currentMotor.status = status;
        this.message = 'Berhasil update status!';
      })
      .catch(err => console.log(err));
    }
  }

  updateMotor(): void {
    const data = {
      type: this.currentMotor.type,
      description: this.currentMotor.description,
      image: this.currentMotor.image,
      price: this.currentMotor.price,
      quantity: this.currentMotor.quantity,
    };
    if (this.currentMotor.id) {
      this.motorService.updateMotor(this.currentMotor.id, data)
        .then(() => this.message = 'Berhasil memperbarui data motor!')
        .catch(err => console.log(err));
    }
  }

  deleteMotor(): void {
    if (this.currentMotor.id) {
      this.motorService.deleteMotor(this.currentMotor.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'Berhasil menghapus data motor!';
        })
        .catch(err => console.log(err));
    }
  }

}
