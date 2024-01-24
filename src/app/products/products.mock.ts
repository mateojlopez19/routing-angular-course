export const productsList :Product[] = [
  {id: 1, name: 'lavanda', price: 10, description: 'botella de 1 litro'},
  {id: 2, name: 'Detergente', price: 5, description: 'dura 20 usos'},
  {id: 3, name: 'Limpia vridrio', price: 7, description: 'tus vridios trasparentes'},
  {id: 4, name: 'Quita grasa', price: 8, description: 'cocina tranquila'},
  {id: 5, name: 'perfumin', price: 7 },
]

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}
