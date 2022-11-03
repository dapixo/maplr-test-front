import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductModule } from './product/product.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { ProductResolver } from './product/product.resolver';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CartComponent } from './cart/cart.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DynamicDialogModule,
    DropdownModule
  ],
  entryComponents: [CartComponent],
  providers: [ProductResolver, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
