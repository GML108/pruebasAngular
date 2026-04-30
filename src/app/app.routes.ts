import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent} from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
{path: 'home',component:HomeComponent},               //Inicio
{path:'services', component:ServicesComponent},      //Servicios
{path:'about', component:AboutComponent},             //About
{path: 'contact',component:ContactComponent},
{path:'**', redirectTo:'home'}                        //Cualquier otra ruta redigirá a HOME
];
