import { NgModule } from "@angular/core";
import { FeedsComponent } from './feeds/feeds.component';
import { SearchHeaderComponent } from './search-header/search-header.component';

@NgModule({
    declarations: [
        FeedsComponent,
        SearchHeaderComponent,
    ],
    exports: [
        FeedsComponent,
        SearchHeaderComponent,
    ]
})
export class SharedModule {}
