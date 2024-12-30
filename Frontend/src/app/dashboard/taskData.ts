export interface Task {
  date: string;
  name: string;
  version: number;
  difficulty: number;
  percentage: number;
  link: string;
}

export const tasks: Task[] = [
  {
    date: "2025-01-01",
    name: "Einführung",
    version: 1.1,
    difficulty: 1,
    percentage: 4,
    link: "/Test-1"
  },
  {
    date: "2025-01-01",
    name: "Einführung 2",
    version: 2,
    difficulty: 3,
    percentage: 10,
    link: "/Test-2"
  },
  {
    date: "2025-01-01",
    name: "Einführung 3",
    version: 1.5,
    difficulty: 5,
    percentage: 70,
    link: "/Test-3"
  },
  {
    date: "2025-01-01",
    name: "Test123 3",
    version: 1.5,
    difficulty: 5,
    percentage: 70,
    link: "/Test-3"
  },
  {
    date: "2025-01-01",
    name: "Einführung 3",
    version: 1.5,
    difficulty: 5,
    percentage: 70,
    link: "/Test-3"
  }
];
