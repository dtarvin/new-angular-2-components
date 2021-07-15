import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService, Product } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nga-categories',
  styleUrls: ['./categories.component.scss'],
  templateUrl: './categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  readonly categoriesNames$: Observable<string[]>;
  readonly products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { 
    this.categoriesNames$ = this.productService.getDistinctCategories().pipe(
      map(categories => ['all', ...categories]));

    this.products$ = this.route.params.pipe(
    switchMap(({ category }) => this.getCategory(category)));
  }

    private getCategory(category: string): Observable<Product[]> {
      return category.toLowerCase() === 'all'
        ? this.productService.getAll()
        : this.productService.getByCategory(category.toLowerCase());
    }
}
