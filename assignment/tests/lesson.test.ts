import fs from 'fs';
import path from 'path';
import { Course, loadTestCourses } from './testSetup';

describe('Lesson Tests', () => {
  let courses: Course[];

  beforeAll(() => {
    courses = loadTestCourses();
  });

  test('Lessons should contain title, description, topics and the content it self that shouldnt be empty', () => {
    courses.forEach((course) => {
      course.modules.forEach(module => {
        module.lessons.forEach(lesson => {

          //LESSON TITLE CHECK
          try {
            expect(lesson).toHaveProperty('title');
            expect(typeof lesson.title).toBe('string');
          } catch (error) {
            console.error(`Error validating lesson title:`, lesson, error);
            throw error;
          }

          //LESSON DESCRIPTION Check
          try {
            expect(lesson).toHaveProperty('description');
            expect(typeof lesson.description).toBe('string');
          } catch (error) {
            console.error(`Error validating lesson description:`, lesson, error);
            throw error;
          }

          //LESSON TOPICS Check
          try {
            expect(lesson).toHaveProperty('topics');
            expect(lesson.topics).toBeInstanceOf(Array);
            expect(lesson.topics).not.toHaveLength(0);
          } catch (error) {
            console.error(`Error validating lesson topics:`, lesson, error);
            throw error;
          }

          //LESSON CONTENT Check
          try {
            expect(lesson).toHaveProperty('content');
            expect(lesson.content).toBeInstanceOf(Array);
            expect(lesson.content).not.toHaveLength(0);
          } catch (error) {
            console.error(`Error validating lesson content:`, lesson, error);
            throw error;
          }

        })
      })
    })
  })
});