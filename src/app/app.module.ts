import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { CarouselLandingComponent } from './components/carousel-landing/carousel-landing.component';
import { ButtonComponent } from './components/button/button.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ShopPartsComponent } from './components/shop-parts/shop-parts.component';
import { MaintenanceProductsComponent } from './components/maintenance-products/maintenance-products.component';
import { LatestArticlesComponent } from './components/latest-articles/latest-articles.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { CompanyBikeComponent } from './components/company-bike/company-bike.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    CarouselLandingComponent,
    ButtonComponent,
    WhoWeAreComponent,
    FeaturedProductsComponent,
    ShopPartsComponent,
    MaintenanceProductsComponent,
    LatestArticlesComponent,
    ArticleItemComponent,
    CompanyBikeComponent,
    SocialMediasComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(fas, far, fab);
  }
}
