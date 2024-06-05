import axios from "axios";

export const main_url =
  "https://my-json-server.typicode.com/flcianat/quicks-db/";

export async function BASE({ method, type }) {
  let loadData = {
    status: false,
    data: [],
  };

  try {
    const response = await axios({
      method,
      url: `${main_url}${type}`,
    });

    if (response.status === 200) {
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
