import { ProductInCart } from '../@types/shoppingCartTypes';

export const productInCart001: ProductInCart = {
  id: 'product-000008',
  category: 'Computers',
  name: 'Samsung Galaxy Book 2 Pro 360',
  priceValue: 1499.46,
  priceCurrency: 'MXN',
  operatingSystem: 'Windows 11 Home',
  color: 'Mystic Silver',
  model: 'i7-1260P',
  SKU: 'NP950QDB-KA3US',
  memory: '16GB RAM, 1TB SSD',
  photoSource: 'trustedreviews.com',
  photoFilename: 'samsung-galaxy-book-2-pro-360.png',
  photoAlt: '[Image of Samsung Galaxy Book 2 Pro 360]',
  screenSize: '13.3-inch',
  brand: { id: 'brand-0008', name: 'Samsung' },
  bluetooth: { id: 'bluetooth-003', version: '5.2' },
  storage: { capacity: '1TB SSD', id: 'storage0004' },
  stock: 50,
  quantity: 1,
};

export const productInCart002: ProductInCart = {
  id: 'product-000009',
  category: 'Computers',
  name: 'MSI GF65 Thin',
  priceValue: 1099.46,
  priceCurrency: 'MXN',
  operatingSystem: 'Windows 11 Home',
  color: 'Black',
  model: 'RTX 3060',
  SKU: '11SCXR-203US',
  memory: '16GB RAM, 512GB SSD',
  photoSource: 'trustedreviews.com',
  photoFilename: 'msi-gf65-thin.png',
  photoAlt: '[Image of MSI GF65 Thin]',
  screenSize: '15.6-inch',
  brand: { id: 'brand-0009', name: 'MSI' },
  bluetooth: { id: 'bluetooth-001', version: '5.0' },
  storage: { capacity: '128GB SSD + 128GB Micro SD', id: 'storage0001' },
  stock: 50,
  quantity: 1,
};

export const productInCart003: ProductInCart = {
  id: 'product-000010',
  category: 'Laptops',
  name: 'Razer Blade 15',
  priceValue: 1999,
  priceCurrency: 'USD',
  operatingSystem: 'Windows 10',
  color: 'Mercury White',
  model: 'Blade 15',
  SKU: 'RAZER-BLD15-WHT',
  memory: '16GB RAM',
  yearRelease: 2020,
  photoUrl: 'https://example.com/laptop8.jpg',
  photoSource: 'trustedreviews.com',
  photoFilename: 'razer-blade-15.png',
  photoAlt: '[Image of Razer Blade 15 Laptop]',
  screenSize: '15.6 inches',
  brand: { id: 'brand-0010', name: 'Razer' },
  bluetooth: { id: 'bluetooth-001', version: '5.0' },
  storage: { capacity: '128GB SSD + 128GB Micro SD', id: 'storage0001' },
  stock: 50,
  quantity: 1,
};

export const productInCart004: ProductInCart = {
  id: 'product-000005',
  category: 'Computers',
  name: "Lenovo IdeaPad Flex 5 14'",
  priceValue: 799.46,
  priceCurrency: 'MXN',
  operatingSystem: 'Windows 11 Home',
  color: 'Grey',
  model: 'Ryzen 5 5500U',
  SKU: '82LM00QBUS',
  memory: '16GB RAM, 256GB SSD',
  photoSource: 'trustedreviews.com',
  photoFilename: 'lenovo-ideapad-flex-5-14inch.png',
  photoAlt: '[Image of Lenovo IdeaPad Flex 5 14]',
  screenSize: '14-inch',
  brand: { id: 'brand-0007', name: 'Lenovo' },
  bluetooth: { id: 'bluetooth-002', version: '5.1' },
  storage: { capacity: '2TB SSD', id: 'storage0005' },
  stock: 50,
  quantity: 1,
};

export const MOCK_PRODUCTS_IN_CART: ProductInCart[] = [
  productInCart001,
  productInCart002,
  productInCart003,
  productInCart004,
];
