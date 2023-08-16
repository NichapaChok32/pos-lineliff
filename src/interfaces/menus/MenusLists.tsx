import { SubCategories } from "./SubCategories";
import { ItemBom } from "./ItemBom";
import { ItemBranch } from "./ItemBranch";
import { ItemModified } from "./ItemModified";
import { ItemSaleChannel } from "./ItemSaleChannel";
import { ItemSupplier } from "./ItemSupplier";
import { ItemBadge } from "./ItemBadge";
import { ItemUnit } from "./ItemUnit";

interface Categories {
  id: number;
  uuid: string;
  name: string;
}

export interface MenusLists {
  id: number;
  uuid: string;
  name: string;
  image: string;
  detail: string;
  price: number;
  itemType: string;
  badge: string;
  barcode: string;
  categories: Categories;
  createdAt: string;
  createdBy: number;
  deletedAt: string;
  deletedBy: number;
  updatedAt: string;
  updatedBy: number;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  imageType: string;
  isEnableBom: boolean;
  isEnableBranch: boolean;
  isEnableModifier: boolean;
  isEnableSaleChannel: boolean;
  isEnableSupplier: boolean;
  itemBom: ItemBom[];
  itemBranch: ItemBranch[];
  itemModifier: ItemModified[];
  itemSaleChannel: ItemSaleChannel[];
  itemStandCost: number;
  itemSupplier: ItemSupplier[];
  itemBadge: ItemBadge[];
  itemUnit: ItemUnit[];
  maximumStockPoint: number;
  noted: string;
  restockPoint: number;
  sku: string;
  status: boolean;
  subCategories: SubCategories;
  subCategoriesId: number;
  tags: string;
  unit: string;
  vat: number;
}
