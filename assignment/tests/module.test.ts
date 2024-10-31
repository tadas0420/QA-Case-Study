import fs from 'fs';
import path from 'path';
import { Course, loadTestCourses } from './testSetup';

describe('Module Tests', () => {
  let courses: Course[];

  beforeAll(() => {
    courses = loadTestCourses();
  });

  test('Modules should contain title and the lessons that cant be empty', () => {
    courses.forEach((course) => {
      course.modules.forEach(module => {

        //MODULE TITLE CHECK
        try {
          expect(module).toHaveProperty('title');
          expect(typeof module.title).toBe('string');
        } catch (error) {
          console.error(`Error validating module title:`, module, error);
          throw error;
        }

        //MODULE LESSONS Check
        try {
          expect(module).toHaveProperty('lessons');
          expect(module.lessons).toBeInstanceOf(Array);
          expect(module.lessons).not.toHaveLength(0);
        } catch (error) {
          console.error(`Error validating module lessons:`, module, error);
          throw error;
        }


      })
    })
  })
});