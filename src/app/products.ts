export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'Aretes de pato',
    price: 50,
    description: 'Par de accesorios para todo tipo de ocasión',
    stock: 1,
  },
  {
    id: 2,
    name: 'Aretes de vaca',
    price: 60,
    description: 'Par de accesorios para todo tipo de ocasión',
    stock: 0,
  },
  {
    id: 3,
    name: 'Aretes de pringles',
    price: 70,
    description: 'Par de accesorios para todo tipo de ocasión',
    stock: 1,
  },
  {
    id: 4,
    name: 'Aretes de manzana',
    price: 70,
    description: 'Par de accesorios para todo tipo de ocasión',
    stock: 4,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
