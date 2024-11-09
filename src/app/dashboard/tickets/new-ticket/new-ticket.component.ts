import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(
    titleInput: HTMLInputElement,
    textInput: string
    // form: HTMLFormElement
  ) {
    console.dir(titleInput.value);
    console.dir(textInput);
    this.form?.nativeElement. reset();
  }
}
