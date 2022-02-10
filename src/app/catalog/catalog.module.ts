import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogPageRoutingModule } from './catalog-routing.module';

import { CatalogPage } from './catalog.page';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogPageRoutingModule
  ],
  declarations: [CatalogPage, ProductDetailsModalComponent],
  entryComponents: [ProductDetailsModalComponent]
})
export class CatalogPageModule {}
