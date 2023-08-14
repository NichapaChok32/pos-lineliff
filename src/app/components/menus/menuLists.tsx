"use client";
import Image from "next/image";
import "../../../styles/components/MenuList.scss";

interface Categories {
  id: number;
  uuid: string;
  name: string;
}

interface SubCategories {
  id: number;
  uuid: string;
  name: string;
}

interface Branches {
  code: string;
  id: number;
  name: string;
  uuid: string;
}

interface BranchGroups {
  id: number;
  name: string;
  uuid: string;
}

interface SubBranchGroups {
  id: number;
  name: string;
  uuid: string;
}

interface ItemBom {
  id: number;
  itemMaster: ItemMaster;
}

interface ItemBranch {
  branchGroups: BranchGroups;
  id: number;
  name: string;
  uuid: string;
  branchSubGroups: SubBranchGroups;
  branchSubGroupsId: number;
  branches: Branches;
  branchesId: number;
  maxStock: number;
  minStock: number;
  price: number;
}

interface Branches {
  code: string;
  id: number;
  name: string;
  uuid: string;
}

interface ItemMaster {
  id: number;
  uuid: string;
  name: string;
}

interface ModifierOption {
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

interface Modifier {
  name: string;
  modifySettingRequired: boolean;
  modifySetting: string;
  minSelection: number;
  maxSelection: number;
  modifierOption: ModifierOption[];
  id: number;
  uuid: string;
  status: boolean;
}

interface ItemModified {
  id: number;
  modifierId: number;
  modifier: Modifier;
}

interface SaleChannel {
  id: number;
  uuid: string;
  name: string;
}

interface ItemSaleChannel {
  branchesId: number;
  id: number;
  price: number;
  saleChannel: SaleChannel;
  saleChannelId: number;
}

interface SupplierGroup {
  id: number;
  uuid: string;
  name: string;
}

interface Supplier {
  id: number;
  uuid: string;
  name: string;
  code: string;
  supplierGroup: SupplierGroup;
}

interface ItemSupplier {
  id: number;
  price: number;
  isVat: boolean;
  unit: string;
  supplier: Supplier;
}

interface Badge {
  cleanName: string;
  id: number;
  name: string;
  uuid: string;
}

interface ItemBadge {
  badge: Badge;
  id: number;
  status: boolean;
  badgeId: number;
}

interface ItemUnit {
  action: string;
  quantity: number;
  unit: string;
}

interface Menus {
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

interface Props {
  item: Menus;
}

export default function MenuLists(props: Props) {
  const { item } = props;

  const calculatePriceVat = (price: number, vat: number) => {
    const percent = vat / 100;
    const diff = price * percent;
    return price + diff;
  };

  return (
    <div id="Menulists">
      <div className="menuGrid">
        <div className="menuCols menuImgCol">
          <Image
            src="/food.png"
            alt="Food"
            className="foodImg"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="menuCols menuDescCol">
          <label className="menuName">{item.name}</label>
          <p className="menuParagraph">{item.detail}</p>
          <div className="menuGrid menuPriceDiv">
            <div className="menuCols">
              <label className="menuPrice">
                {calculatePriceVat(item.price, item.vat)}
              </label>
            </div>
            <div className="menuCols">
              <button className="btnAddMenu">
                <i className="pos-add h-6 w-6 iconAdd" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
