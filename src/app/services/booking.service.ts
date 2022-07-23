import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Booking } from '../models/booking.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private dbPath = '/BookingData';
  private dbPathUser = '/UserData';
  bookingDataRef: AngularFirestoreCollection<Booking>;
  userRef: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore) { 
    this.bookingDataRef = db.collection(this.dbPath, ref => ref.orderBy('bookingId', 'desc'));
    this.userRef = db.collection(this.dbPathUser);
   }

   getAllData(): AngularFirestoreCollection<Booking> {
    return this.bookingDataRef;
   }

   getAllUser(): AngularFirestoreCollection<User> {
    return this.userRef;
   }

   updateBooking(id: string, data: any): Promise<void> {
    return this.bookingDataRef.doc(id).update(data);
   }
}
