// Interface automatically generated by schemas-to-ts

import { ProductFeature } from '../../../api/product-feature/content-types/product-feature/product-feature';
import { ProductFeature_Plain } from '../../../api/product-feature/content-types/product-feature/product-feature';

export interface Plan {
  name?: string;
  description?: string;
  isRecommended?: boolean;
  price?: number;
  pricePeriod?: string;
  product_features: { data: ProductFeature[] };
}
export interface Plan_Plain {
  name?: string;
  description?: string;
  isRecommended?: boolean;
  price?: number;
  pricePeriod?: string;
  product_features: ProductFeature_Plain[];
}

export interface Plan_NoRelations {
  name?: string;
  description?: string;
  isRecommended?: boolean;
  price?: number;
  pricePeriod?: string;
  product_features: number[];
}

