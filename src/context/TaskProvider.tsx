import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Filter, Task, TaskProviderState } from "../lib/types";
// import { storage } from "../lib/storage";

const initialState: TaskProviderState = {
  tasks: [],
  currentFilter: "All",
  filters: ["All", "Completed", "Pending"],
  setCurrentFilter: () => {},
  toggleComplete: () => {},
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
};
const TaskContext = createContext<TaskProviderState>(initialState);

export function TaskProvider({ children }: { children: ReactNode }) {
  const filters = initialState.filters;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentFilter, setCurrentFilter] = useState<Filter>("All");

  function saveTasksToStorage(tasksToSave: Task[]) {
    // storage.set("tasks", JSON.stringify(tasksToSave));
  }

  function toggleComplete(taskId: number) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      saveTasksToStorage(updatedTasks);
      return updatedTasks;
    });
  }

  function addTask(task: Task) {
    task.title = task.title.trim();
    task.description = task.description.trim();
    setTasks((prevTasks) => {
      const updatedTasks = [
        ...prevTasks,
        { ...task, id: prevTasks.length + 1, completed: false },
      ];
      saveTasksToStorage(updatedTasks);
      return updatedTasks;
    });
  }

  function updateTask(updatedTask: Task) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      saveTasksToStorage(updatedTasks);
      return updatedTasks;
    });
  }

  function deleteTask(taskId: number) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      saveTasksToStorage(updatedTasks);
      return updatedTasks;
    });
  }

  // useEffect(() => {
  //   const savedTasks = storage.getString("tasks");
  //   if (savedTasks) {
  //     const data = JSON.parse(savedTasks);
  //     setTasks(data);
  //   }
  // }, [storage]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        currentFilter,
        filters,
        setCurrentFilter,
        toggleComplete,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
