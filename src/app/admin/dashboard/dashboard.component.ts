import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { map } from 'rxjs/operators';
import { Booking } from 'src/app/models/booking.model';
import { User } from 'src/app/models/user.model';
import { Motor } from 'src/app/models/motor.model';
import { MotorService } from 'src/app/services/motor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  motors?: Motor[];
  users?: User[];
  bookings?: Booking[];
  currentBooking?: Booking;
  currentIndex = -1;
  name = '';

  constructor(private bookingService: BookingService, private motorService: MotorService) { }

  ngOnInit(): void {
    this.retrieveBookingData();
    this.retrieveUserData();
    this.retrieveMotorData();
  }

  refreshList(): void {
    this.currentBooking = undefined;
    this.currentIndex = -1;
    this.retrieveBookingData();
  }

  retrieveBookingData(): void {
    this.bookingService.getAllData().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log(data);
      this.bookings = data;
    });
  }

  retrieveUserData(): void {
    this.bookingService.getAllUser().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  retrieveMotorData(): void {
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

  setActiveBooking(booking: Booking, index: number): void {
    this.currentBooking = booking;
    this.currentIndex = index;
  }

  updateConfirmStatus(status: boolean, i: number): void {
    this.bookingService.updateBooking(this.bookings![i].id!, { isConfirm: status })
      .then(() => {
        this.bookings![i].isConfirm = status;
      })
      .catch(err => console.log(err));
  }

  updateEndStatus(status: boolean, i: number): void {
    this.bookingService.updateBooking(this.bookings![i].id!, { isFinish: status })
      .then(() => {
        this.bookings![i].isFinish = status;
      })
      .catch(err => console.log(err));
  }

}
