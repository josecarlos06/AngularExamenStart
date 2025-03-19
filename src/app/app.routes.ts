import { Routes } from '@angular/router';
import { AreaPageComponent } from './pages/area/area-page.component';
import { EmpleadoPageComponent } from './pages/empleado/empleado-page.component';

export const routes: Routes = [{
   path: 'dashboard',
   children: [
      {
         path: 'Empleado',
         component: EmpleadoPageComponent
      },
      {
         path: 'Area',
         component: AreaPageComponent
      },

   ]

}, {
   path: '**',
   redirectTo: 'dashboard'
}];
