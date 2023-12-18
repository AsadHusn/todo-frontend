import { BASE_URL } from "./configs";
export default async (endpoint, method, body) => {
  const options = {
    method,
  };
  if (["POST", "PUT"].includes(method)) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(body);
  }
  const res = await fetch(BASE_URL + endpoint, options);
  if (res.ok) {
    const contentType = res.headers.get("Content-Type");
    if (contentType.includes("application/json")) {
      return await res.json();
    }
    return await res.text();
  }
  throw new Error(res.statusText);
};
