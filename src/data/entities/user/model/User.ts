export interface User {
    nickname: string;
    status: string;
    description: string;
    birthday: string; // ISO-строка (Date.toISOString()), если приходит как дата
    sex: "MALE" | "FEMALE"; // или enum, если знаешь точные значения
    link_to_avatar: string; // учитываем snake_case (если API так отдает)
    //tags: Tag[]; // нужен интерфейс Tag
}