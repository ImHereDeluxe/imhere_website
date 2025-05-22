import { TagCategory } from "./TagCategory";

export interface Tag {
    tag_id: number;
    tag_name: string;
    tag_category: TagCategory;
}