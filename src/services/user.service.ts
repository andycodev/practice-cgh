import httpAxios from "@/api/apiBase";
import type { IUser } from "@/interfaces/user";

export const getUsersFn = async (): Promise<IUser[]> => {
  const { data } = await httpAxios.get<IUser[]>('/users');
  return data;
}
