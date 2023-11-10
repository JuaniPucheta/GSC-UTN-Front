// src/app/subscription-form/subscription-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent {
  subscriptionForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private subscriptionService: SubscriptionService) {
    this.subscriptionForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
      recibirNotificaciones: [false],
      aceptarTerminos: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.subscriptionForm.valid) {
      this.subscriptionService.crearSuscripcion(this.subscriptionForm.value).subscribe(
        (response) => {
          console.log('Suscripcion creada: ', response);
          this.submitted = true;
        },
        (error) => {
          console.error('Error al crear la suscripcion: ', error);
        }
      );
    }
  }
}
