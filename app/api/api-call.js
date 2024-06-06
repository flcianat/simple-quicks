import axios from "axios";

export const main_url =
  "https://my-json-server.typicode.com/flcianat/quicks-db/";

export async function BASE({ method, type, body }) {
  let loadData = {
    status: false,
    data: [],
  };

  try {
    const response = await axios({
      method,
      url: `${main_url}${type}`,
      body:body
    });

    if (response.status === 200 || response.status === 201) {
      loadData.status = true;
      loadData.data = response.data;
    } else {
      throw new Error("Unexpected response status: " + response.status);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    loadData.status = false;
  }

  return loadData;
}

export async function getAllTasks() {
  const res = await BASE({ method: "get", type: "tasks" });
  return res.data;
}

export async function getTaskbyID(id) {
  const res = await BASE({ method: "get", type: `tasks/${id}` });
  return res;
}

export async function getAllChat() {
  const res = await BASE({ method: "get", type: "chatList" });
  return res.data;
}

export async function deleteTask(id) {
  const res = await BASE({ method: "delete", type: `tasks/${id}` });
  return res.data;
}

export async function addTask(body) {
  const res = await BASE({ method: "post", type: `tasks`, body });
  return res.data;
}