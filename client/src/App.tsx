import { useEffect, useState } from "react";
import {
  getTasks,
  createTask as createTaskAPI,
  toggleTask as toggleTaskAPI,
} from "./api/api";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [togglingTasks, setTogglingTasks] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError(null);
    } catch {
      setError("Не удалось загрузить задачи");
    } finally {
      setIsLoading(false);
    }
  };

  const createTask = async () => {
    if (!title.trim()) return;
    try {
      setIsAdding(true);
      await createTaskAPI(title);
      setTitle("");
      fetchTasks();
    } catch {
      setError("Ошибка при добавлении задачи");
    } finally {
      setIsAdding(false);
    }
  };

  const toggleTask = async (id: number) => {
    try {
      setTogglingTasks((prev) => new Set(prev).add(id));
      await toggleTaskAPI(id);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    } catch {
      setError("Ошибка при обновлении задачи");
    } finally {
      setTogglingTasks((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Список задач</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-1"
          placeholder="Новая задача..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createTask}
          disabled={isAdding}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isAdding ? "Добавление..." : "Добавить"}
        </button>
      </div>

      {isLoading ? (
        <p className="text-center">Загрузка...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : tasks.length === 0 ? (
        <p className="text-center text-gray-500">Задач нет</p>
      ) : (
        <ul>
          {tasks
            .map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between border-b py-2"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    disabled={togglingTasks.has(task.id)}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span
                    className={
                      task.completed ? "line-through text-gray-500" : ""
                    }
                  >
                    {task.title}
                  </span>
                </label>
              </li>
            ))
            .reverse()}
        </ul>
      )}
    </div>
  );
}

export default App;
