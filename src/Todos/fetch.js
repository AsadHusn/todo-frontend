import { BASE_URL } from "./configs";
export default async (endpoint, method, body) => {
  const options = {
    method,
  };
  if (["POST", "PUT"].includes(method)) {
    options.headers = {
      "Content-type": "application/json",
    };
    options.body = JSON.stringify(body);
  }
  const res = await fetch(BASE_URL + endpoint, options);
  if (res.ok) return await res.json();
  throw new Error(res.statusText);
};
