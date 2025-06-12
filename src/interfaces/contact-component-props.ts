import { Product } from "@/interfaces/product";

export interface ContactComponentProps {
  product: Product,
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>
}