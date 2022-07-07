import { Component, OnInit } from '@angular/core';
import { MotorService } from 'src/app/services/motor.service';
import { Motor } from 'src/app/models/motor.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-motor-list',
  templateUrl: './motor-list.component.html',
  styleUrls: ['./motor-list.component.css']
})
export class MotorListComponent implements OnInit {
  motors?: Motor[];
  currentMotor?: Motor;
  currentIndex = -1;
  type = '';

  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
    this.retrieveMotors();
  }

  refreshList(): void {
    this.currentMotor = undefined;
    this.currentIndex = -1;
    this.retrieveMotors();
  }

  retrieveMotors(): void {
    this.motorService.getAllMotor().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log(data);
      this.motors = data;
    });
  }

  setActiveMotor(motor: Motor, index: number): void {
    this.currentMotor = motor;
    this.currentIndex = index;
  }

}
