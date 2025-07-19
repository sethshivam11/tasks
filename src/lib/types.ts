export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type Filter = "All" | "Completed" | "Pending";

export interface TaskProviderState {
  tasks: Task[];
  currentFilter: Filter;
  filters: Filter[];
  setCurrentFilter: (filter: Filter) => void;
  toggleComplete: (taskId: number) => void;
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
}
