    import { RouterModule, Routes } from '@angular/router';
    import { NgModule } from '@angular/core';
    import { HomeComponent } from '../home/home.component';
    import { CadetStatsComponent } from '../cadet-stats/cadet-stats.component';
    import { CompanyStatsComponent } from '../company-stats/company-stats.component';

    const routes: Routes = [
    // {
    //     path: '/my-new-route',
    //     component: MyNewRouteComponent,
    // },
        {
            path: '',
            component: HomeComponent,
        },
        {
            path: 'CadetStats',
            component: CadetStatsComponent,
        },
        {
            path: 'CompanyStats',
            component: CompanyStatsComponent,
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }