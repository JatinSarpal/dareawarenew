import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DarePage } from './dare.page';
import { FeedsComponent } from 'src/app/components/feeds/feeds.component';
import { SearchHeaderComponent } from 'src/app/components/search-header/search-header.component';

const routes: Routes = [
  {
    path: '',
    component: DarePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DarePage, FeedsComponent, SearchHeaderComponent]
})
export class DarePageModule {}
