import { BranchGroups } from "./BranchGroups";
import { SubBranchGroups } from "./SubBranchGroups";
import { Branches } from "./Branches";

export interface ItemBranch {
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
