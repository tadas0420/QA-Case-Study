import fs from 'fs';
import path from 'path';
import { Course, loadTestCourses } from './testSetup';

describe('Content Tests', () => {
  let courses: Course[];

  beforeAll(() => {
    courses = loadTestCourses();
  });

  test('Content should contain type and data ', () => {
    const validTypes = ['text', 'video', 'audio', 'podcast'];

    courses.forEach((course) => {
      course.modules.forEach(module => {
        module.lessons.forEach(lesson => {
          lesson.content.forEach(c_element => {

            //CONTENT TYPE CHECK
            try {
              expect(c_element).toHaveProperty('type');
              expect(typeof c_element.type).toBe('string');
              expect(validTypes).toContain(c_element.type);
            } catch (error) {
              console.error(`Error validating content type:`, c_element, error);
              throw error;
            }

            //CONTENT DATA CHECK
            try {
              expect(c_element).toHaveProperty('data');
              expect(typeof c_element.data).toBe('string');
            } catch (error) {
              console.error(`Error validating content data:`, c_element, error);
              throw error;
            }
          })
        })
      })
    })
  })
});