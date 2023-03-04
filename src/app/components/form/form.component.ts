import { Component, Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() finishContact: EventEmitter<any> = new EventEmitter();

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]]
  });

  
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  openDialog() {
  }
  
  onSubmit(): void {
    const verifyForm = Boolean(this.form.controls.email.errors || this.form.controls.name.errors || this.form.controls.message.errors);
    if(verifyForm){
      alert('Preencha os campos corretamente');
      return;
    }
    const message = `Olá Enzo, meu nome é ${this.form.value.name}. 

${this.form.value.message}. 

Aqui está meu email caso queira retornar o contato: ${this.form.value.email}`;

    const encodedMessage = encodeURIComponent(message);

    this.finishContact.emit();

    window.open(`https://wa.me/5521990521525?text=${encodedMessage}`, "_blank");
  }
}
