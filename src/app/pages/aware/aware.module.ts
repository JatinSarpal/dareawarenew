import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AwarePage } from './aware.page';
import { FeedsComponent } from 'src/app/components/feeds/feeds.component';
import { SearchHeaderComponent } from 'src/app/components/search-header/search-header.component';

const routes: Routes = [
  {
    path: '',
    component: AwarePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AwarePage, FeedsComponent, SearchHeaderComponent]
})
export class AwarePageModule {}
