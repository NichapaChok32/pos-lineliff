import { Supplier } from "./Supplier";

export interface ItemSupplier {
  id: number;
  price: number;
  isVat: boolean;
  unit: string;
  supplier: Supplier;
}
