type Course = {
  title: string;
  progress: number;
  lastAccessed?: Date;
};

const courses: Course[] = [
  {
    title: "Design et dev d'applis mobiles",
    progress: 10,
    lastAccessed: new Date("2025-12-01"),
  },
  {
    title: "Semaine atypique",
    progress: 0,
  },
  {
    title: "Projet Demoreel",
    progress: 0,
  },
  {
    title: "Introduction au droit d'auteur",
    progress: 100,
    lastAccessed: new Date("2023-01-04"),
  },
  {
    title: "Recherche créative 3",
    progress: 75,
    lastAccessed: new Date("2023-01-05"),
  },
  {
    title: "Gestion de projet",
    progress: 20,
    lastAccessed: new Date("2023-01-06"),
  },
  {
    title: "Design web 3",
    progress: 40,
    lastAccessed: new Date("2023-01-07"),
  },
  {
    title: "Plan de communication et concept créatif",
    progress: 55,
    lastAccessed: new Date("2023-01-08"),
  },
  {
    title: "Workshop Com'360",
    progress: 100,
    lastAccessed: new Date("2023-01-09"),
  },
  {
    title: "Technologies web",
    progress: 30,
    lastAccessed: new Date("2023-01-10"),
  },
];

export function getCourses(): Course[] {
  return courses;
}
