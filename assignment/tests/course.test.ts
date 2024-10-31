import fs from 'fs';
import path from 'path';
import { Course, loadTestCourses } from './testSetup';

describe('Course Tests', () => {
  let courses: Course[];

  beforeAll(() => {
    courses = loadTestCourses();
  });

  test('courses.json file should contain an array of courses', () => {
    expect(Array.isArray(courses)).toBe(true);
    expect(courses.length).toBeGreaterThan(0);
  })

  test('Courses should have an id, title, description and modules(and they shouldnt be empty)', () => {
    courses.forEach((course) => {

      //ID Check
      try {
        expect(course).toHaveProperty('id');
        expect(typeof course.id).toBe('number');
      } catch (error) {
        console.error(`Error validating course ID:`, course, error);
        throw error;
      }

      //TITLE Check
      try {
        expect(course).toHaveProperty('title');
        expect(typeof course.title).toBe('string');
      } catch (error) {
        console.error(`Error validating course title:`, course, error);
        throw error;
      }

      //DESCRIPTION Check
      try {
        expect(course).toHaveProperty('description');
        expect(typeof course.description).toBe('string');
      } catch (error) {
        console.error(`Error validating course description:`, course, error);
        throw error;
      }

      //MODULE Check
      try {
        expect(course).toHaveProperty('modules');
        expect(course.modules).toBeInstanceOf(Array);
        expect(course.modules).not.toHaveLength(0);
      } catch (error) {
        console.error(`Error validating course modules:`, course, error);
        throw error;
      }

    })
  })
});