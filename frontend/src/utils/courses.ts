export type Course = {
  title: string;
  progress: number;
  lastAccessed?: Date;
};


export const getCourses = async (): Promise<Course[]> => await fetch('http://localhost:3000/api/courses').then((response) => response.json());
