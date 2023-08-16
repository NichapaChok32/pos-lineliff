import { ItemBom } from "./ItemBom";

export interface ModifierOption {
  name: string;
  price: number;
  modifier: string;
  itemBom: ItemBom[];
  id: number;
  uuid: string;
  status: boolean;
  createdAt: string;
  createdBy: number;
  updatedAt: string;
  updatedBy: number;
  deletedAt: string;
  deletedBy: number;
}
