import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MAT_DATE_FORMATS,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideshowModule } from 'ng-simple-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DgbBundeskongressComponent } from './news/dgb-bundeskongress/dgb-bundeskongress.component';
import { FeatureComponent } from './feature/feature.component';
import { LanguageControllerComponent } from './language-controller/language-controller.component';
import { ImpressumComponent } from './legal-notice/legal-notice.component';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderComponent } from './order/order.component';
import { PricesComponent } from './prices/prices.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReferenceContainerComponent } from './reference-container/reference-container.component';
import { ReferencesComponent } from './references/references.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { WrappableDirective } from './wrappable.directive';

export const MOMENT_FORMATS = {
    parse: {
        dateInput: 'DD.MM.YYYY'
    },
    display: {
        dateInput: 'DD.MM.YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD.MM.YYYY',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

@NgModule({
    declarations: [
        AppComponent,
        LanguageControllerComponent,
        WrappableDirective,
        ScrollSpyDirective,
        MainMenuComponent,

        MainComponent,
        PrivacyComponent,
        ImpressumComponent,
        ReferencesComponent,
        ContactComponent,
        PricesComponent,
        OrderComponent,
        FeatureComponent,
        OrderSuccessComponent,
        DgbBundeskongressComponent,
        ReferenceContainerComponent,
        NewsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SlideshowModule,
        HttpClientModule,

        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule
    ],
    providers: [{ provide: MAT_DATE_FORMATS, useValue: MOMENT_FORMATS }],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
