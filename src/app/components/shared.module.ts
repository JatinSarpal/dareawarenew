import { NgModule } from "@angular/core";
import { FeedsComponent } from './feeds/feeds.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        FeedsComponent,
        SearchHeaderComponent,
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        FeedsComponent,
        SearchHeaderComponent,
    ]
})
export class SharedModule { }
