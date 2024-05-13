import useSWR from 'swr';

import { getTodos } from '../requests';
import type { GetTodosRequestConfig } from '../requests';

export const useGetTodo = ({ params, config }: GetTodosRequestConfig) =>
  useSWR({ params, config }, getTodos);
