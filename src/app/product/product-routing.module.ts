import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product.component";
import { ProductResolver } from "./product.resolver";

const routes: Routes = [
  {
    path: ':id', component: ProductComponent,
    resolve: {
      product: ProductResolver
    },
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ProductRoutingModule {}
