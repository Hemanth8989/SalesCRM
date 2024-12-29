import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem, IonLabel, IonList, IonIcon, IonFabButton, IonFab } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline, options, eyeOutline, arrowForwardCircle, addOutline, personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonIcon, IonList, IonLabel, IonItem,IonTitle,IonToolbar,IonHeader, IonContent, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  invoices = [
    { number: 'INV001', name: 'John Doe', amount: 500, status: 'Paid' },
    { number: 'INV002', name: 'Jane Smith', amount: 300, status: 'Pending' },
    { number: 'INV003', name: 'Mike Johnson', amount: 450, status: 'Overdue' },
    { number: 'INV004', name: 'Alice Brown', amount: 250, status: 'Paid' },
    { number: 'INV005', name: 'Chris Evans', amount: 700, status: 'Pending' },
    { number: 'INV006', name: 'Emma Watson', amount: 650, status: 'Overdue' },
    { number: 'INV007', name: 'Robert Downey', amount: 400, status: 'Paid' },
    { number: 'INV008', name: 'Scarlett Johansson', amount: 350, status: 'Pending' },
    { number: 'INV009', name: 'Tom Holland', amount: 200, status: 'Paid' },
    { number: 'INV010', name: 'Natalie Portman', amount: 500, status: 'Overdue' },
    { number: 'INV011', name: 'Chris Hemsworth', amount: 800, status: 'Pending' },
    { number: 'INV012', name: 'Mark Ruffalo', amount: 300, status: 'Paid' },
    { number: 'INV013', name: 'Jeremy Renner', amount: 550, status: 'Overdue' },
    { number: 'INV014', name: 'Paul Rudd', amount: 750, status: 'Paid' },
    { number: 'INV015', name: 'Elizabeth Olsen', amount: 450, status: 'Pending' },
    { number: 'INV016', name: 'Anthony Mackie', amount: 600, status: 'Paid' },
    { number: 'INV017', name: 'Sebastian Stan', amount: 400, status: 'Overdue' },
    { number: 'INV018', name: 'Benedict Cumberbatch', amount: 900, status: 'Pending' },
    { number: 'INV019', name: 'Brie Larson', amount: 550, status: 'Paid' },
    { number: 'INV020', name: 'Chadwick Boseman', amount: 700, status: 'Pending' }
  ];
  constructor() { 
    addIcons({addOutline,personAddOutline,arrowForwardCircle,eyeOutline,appsOutline,options});
  }

  ngOnInit() {
  }
  viewInvoice(invoice:any){
    
  }
  addInvoice(){
    
  }

}
