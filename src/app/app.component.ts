import { Component } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StatusComponent,HeaderComponent,TicketsComponent,TrafficComponent,DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {


}
