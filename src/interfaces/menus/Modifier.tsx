import { ModifierOption } from "./ModifierOption";

export interface Modifier {
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
