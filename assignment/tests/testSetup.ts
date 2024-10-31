import fs from 'fs';
import path from 'path';

export interface Content {
    type: 'text' | 'video' | 'audio' | 'podcast';
    data: string;
}

export interface Lesson {
    title: string;
    description: string;
    topics: string[];
    content: Content[];
}

export interface Module {
    title: string;
    lessons: Lesson[];
}

export interface Course {
    id: number;
    title: string;
    description: string;
    modules: Module[];
}

export const loadTestCourses = (): Course[] => {
    const filePath = path.join(__dirname, '../courses.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
};