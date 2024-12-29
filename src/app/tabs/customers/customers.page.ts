import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon,IonFab, IonFabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonIcon, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CustomersPage implements OnInit {
   // Sample customer list
   customers = [
    { id: 'CUST001', name: 'John Doe', address: '123 Elm St, City A', invoices: 5 },
    { id: 'CUST002', name: 'Jane Smith', address: '456 Oak St, City B', invoices: 3 },
    { id: 'CUST003', name: 'Mike Johnson', address: '789 Pine St, City C', invoices: 7 },
    { id: 'CUST004', name: 'Alice Brown', address: '101 Maple St, City D', invoices: 2 },
    { id: 'CUST005', name: 'Chris Evans', address: '202 Birch St, City E', invoices: 4 },
    { id: 'CUST006', name: 'Emma Watson', address: '303 Cedar St, City F', invoices: 6 },
    { id: 'CUST007', name: 'Robert Downey', address: '404 Spruce St, City G', invoices: 8 },
    { id: 'CUST008', name: 'Scarlett Johansson', address: '505 Redwood St, City H', invoices: 1 },
    { id: 'CUST009', name: 'Tom Holland', address: '606 Cherry St, City I', invoices: 9 },
    { id: 'CUST010', name: 'Natalie Portman', address: '707 Ash St, City J', invoices: 10 },
  ];


  constructor() { }

  ngOnInit() {
  }
  // Function to view customer details
  viewCustomer(customer: any) {
    console.log('View Customer:', customer);
    // Navigate to customer details page or open a modal
  }

  // Function to add a new customer
  addCustomer() {
    console.log('Add Customer clicked');
    // Navigate to add customer page or open a modal
  }

}
