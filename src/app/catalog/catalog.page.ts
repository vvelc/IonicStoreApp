import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  products = []
  filteredProducts = []
  searchTerm = ""

  @ViewChild('content') content: IonContent

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.fetchProducts()
    setTimeout(() => {
      this.openProductsDetailModal(1)
    }, 1000)
  }

  async openProductsDetailModal(id: number) {
    const sce = await this.content.getScrollElement()

    console.log(sce.scrollTop);
    const product = this.products.find(p => p.id == id)
    const modal = await this.modalCtrl.create({
      component: ProductDetailsModalComponent,
      componentProps: {
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
        rating: product.rating.rate
      }
    })

    await modal.present()
  }

  async fetchProducts() {
    const result = await fetch('https://fakestoreapi.com/products').then(res=>res.json())
    console.log(result)
    this.products = result
    this.filteredProducts = result
  }

}
