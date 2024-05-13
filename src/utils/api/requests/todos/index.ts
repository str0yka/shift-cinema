import { api } from '../../instance';

export interface GetTodosParams {
  id: number;
}

export type GetTodosRequestConfig = RequestConfig<GetTodosParams>;

export interface GetTodosResponse {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

export const getTodos = ({ params, config }: GetTodosRequestConfig) =>
  api.get(`todos/${params.id}`, config).json<GetTodosResponse>();
