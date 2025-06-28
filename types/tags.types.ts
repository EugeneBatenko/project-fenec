import { TagTypeEnum } from "@/types/enum";

export interface TagsItem extends Document {
  name: string;
  type: TagTypeEnum
}

export type TagTypes = {
  name: string;
  type: TagTypeEnum
}
