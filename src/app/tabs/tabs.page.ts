import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatboxEllipsesOutline, heartOutline, homeOutline, personOutline, personAddOutline, peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon ,CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({homeOutline,peopleOutline,personOutline,personAddOutline,heartOutline,chatboxEllipsesOutline});
  }

  ngOnInit() {
  }

}
