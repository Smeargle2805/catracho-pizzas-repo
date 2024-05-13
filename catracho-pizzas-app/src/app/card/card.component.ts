import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonCard, IonCardHeader, IonCardContent, IonButton, IonCardTitle, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCard, IonCardTitle, CommonModule, FormsModule, IonButton, IonImg ]
})
export class CardComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  quantity: number = 1;

  constructor(private alertController: AlertController) { }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  async addToCart() {
    const alert = await this.alertController.create({
      header: '¡Producto Agregado!',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
