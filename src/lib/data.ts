// TEMPORAY DATA

export let role = "admin";

export const teachersData = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "Juan Dela Cruz",
    email: "jdcruz@gmail.com",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "Manila",
  },
  {
    id: 2,
    teacherId: "1234567890",
    name: "Maria Dela Cruz",
    email: "mdcruz@gmail.com",
    phone: "1234567890",
    subjects: ["Filipino", "Physics"],
    classes: ["1B", "2A", "3C"],
    address: "Muntinlupa",
  },
  {
    id: 3,
    teacherId: "1234567890",
    name: "Jose Santos",
    email: "jsantos@gmail.com",
    phone: "1234567890",
    subjects: ["English", "Science"],
    classes: ["1B", "2A", "3C"],
    address: "Cavite",
  },
];

export const studentsData = [
  {
    id: 1,
    studentId: "1234567890",
    name: "Juan Dela Cruz",
    email: "jdcruz@gmail.com",
    phone: "1234567890",
    grade: 3,
    class: "1A",
    address: "Manila",
  },
  {
    id: 2,
    studentId: "1234567890",
    name: "Maria Dela Cruz",
    email: "mdcruz@gmail.com",
    phone: "1234567890",
    grade: 5,
    class: "1B",
    address: "Muntinlupa",
  },
  {
    id: 3,
    studentId: "1234567890",
    name: "Jose Santos",
    email: "jsantos@gmail.com",
    phone: "1234567890",
    grade: 1,
    class: "1C",
    address: "Cavite",
  },
];

export const parentsData = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "jdcruz@gmail.com",
    phone: "1234567890",
    students: ["Billy"],
    address: "Manila",
  },
  {
    id: 2,
    name: "Maria Dela Cruz",
    email: "mdcruz@gmail.com",
    phone: "1234567890",
    students: ["Julius"],
    address: "Muntinlupa",
  },
  {
    id: 3,
    name: "Jose Santos",
    email: "jsantos@gmail.com",
    phone: "1234567890",
    students: ["Dexter"],
    address: "Cavite",
  },
];

export const calendarEvents = [
  {
    title: "English",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 30, 8, 0),
    end: new Date(2025, 2, 30, 8, 45),
  },
  {
    title: "Math",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 30, 9, 0),
    end: new Date(2025, 2, 30, 9, 45),
  },
  {
    title: "Filipino",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 30, 10, 0),
    end: new Date(2025, 2, 30, 10, 45),
  },
  {
    title: "Science",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 30, 11, 0),
    end: new Date(2025, 2, 30, 11, 45),
  },
  {
    title: "English",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 31, 8, 0),
    end: new Date(2025, 2, 31, 8, 45),
  },
  {
    title: "Math",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 31, 9, 0),
    end: new Date(2025, 2, 31, 9, 45),
  },
  {
    title: "Filipino",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 31, 10, 0),
    end: new Date(2025, 2, 31, 10, 45),
  },
  {
    title: "Science",
    allDay: false,
    // Year, Month(Start from 0), Day, Hour, Minute
    start: new Date(2025, 2, 31, 11, 0),
    end: new Date(2025, 2, 31, 11, 45),
  },
];
