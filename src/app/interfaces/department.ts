import { Faculty } from "./faculty";

export interface Department {
    id: number;
    name: string;
    createdDate: Date;
    updatedDate: Date | null;
    faculty: Faculty
}