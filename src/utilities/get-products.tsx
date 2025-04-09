import fsPromises from 'fs/promises';
import path from 'path'
import { Product } from '@/interfaces/product';

export async function getProducts() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), '/public/products.json');
  // Read the json file
  const jsonData: string = await fsPromises.readFile(filePath) as any;
  // Parse data as json
  const objectData: Array<Product> = JSON.parse(jsonData);

  return objectData
}