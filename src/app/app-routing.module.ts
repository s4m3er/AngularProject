import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestComponentComponent } from './rest-component/rest-component.component';

const routes: Routes = [
  {
    path: 'rest-component',
    component: RestComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
