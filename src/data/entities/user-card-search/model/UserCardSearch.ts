import {Tag} from "../../Tag.ts";

export interface UserCardSearch {
    id: number;
    nickname: string;
    description: string;
    link_to_avatar: string;
    tags: Tag[];
}
