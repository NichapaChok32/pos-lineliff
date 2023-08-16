import { Modifier } from "./Modifier";

export interface ItemModified {
  id: number;
  modifierId: number;
  modifier: Modifier;
}
