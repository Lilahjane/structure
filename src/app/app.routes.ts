import { Routes } from '@angular/router';
import { CbcontainerComponent } from '../components/cbcontainer/cbcontainer.component';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
export const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    },

    
    {
        path: 'cookbook',
    component: CbcontainerComponent
    },

];
