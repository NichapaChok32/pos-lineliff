import { SubCategories } from "./SubCategories";

export interface Categories {
  id: number;
  uuid: string;
  status: boolean;
  name: string;
  createdAt: string;
  updatedAt: string;
  subCategories: SubCategories[];
  itemMaster: SubCategories[];
}
