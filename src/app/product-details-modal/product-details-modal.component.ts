import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.scss'],
})
export class ProductDetailsModalComponent {

  constructor(private modalCtrl: ModalController) { }

  @Input() id: number
  @Input() title: string
  @Input() price: number
  @Input() category: string
  @Input() description: string
  @Input() image: string
  @Input() rating: number

  closeModal() {
    this.modalCtrl.dismiss()
  }
}
