import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MarketComponent } from './market/market.component';
import { MarketItemComponent } from './market-item/market-item.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, MarketComponent, MarketItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DropdownModule,
    FormsModule
  ],
})
export class HomeModule {}
