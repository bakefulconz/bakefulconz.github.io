import fsPromises from 'fs/promises';
import path from 'path'
import { Faq } from '@/interfaces/faq';

export async function getFaqs() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), '/public/faqs.json');
  // Read the json file
  const jsonData: string = await fsPromises.readFile(filePath) as any;
  // Parse data as json
  const objectData: Array<Faq> = JSON.parse(jsonData);

  return objectData
}