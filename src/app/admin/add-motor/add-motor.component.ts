import { Component, OnInit } from '@angular/core';
import { Motor } from 'src/app/models/motor.model';
import { MotorService } from 'src/app/services/motor.service';

@Component({
  selector: 'app-add-motor',
  templateUrl: './add-motor.component.html',
  styleUrls: ['./add-motor.component.css']
})
export class AddMotorComponent implements OnInit {
  motor: Motor = new Motor();
  submitted = false;

  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
  }

  saveMotor(): void {
    this.motorService.addMotor(this.motor).then(() => {
      console.log('create new item successfully!');
      this.submitted = true;
    })
  }

  newMotor(): void {
    this.submitted = false;
    this.motor = new Motor();
  }

}
