import { SupplierGroup } from "./SupplierGroup";

export interface Supplier {
  id: number;
  uuid: string;
  name: string;
  code: string;
  supplierGroup: SupplierGroup;
}
