import { MenusLists } from "./MenusLists";

export interface MenuCategories {
  id: number;
  name: string;
  menuLists: MenusLists[];
}
