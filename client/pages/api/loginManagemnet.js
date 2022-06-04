import { post } from "../../setup/client";

const login = (body) => {
  return post('', body);
};

export { login };
