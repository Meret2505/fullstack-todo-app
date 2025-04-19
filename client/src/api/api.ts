import axios from "axios";

const API_URL = "http://localhost:3000";

export const getTasks = async () => {
  const res = await axios.get(`${API_URL}/tasks`);
  return res.data;
};

export const createTask = async (title: string) => {
  await axios.post(`${API_URL}/tasks`, { title });
};

export const toggleTask = async (id: number) => {
  await axios.patch(`${API_URL}/tasks/${id}/toggle`);
};
