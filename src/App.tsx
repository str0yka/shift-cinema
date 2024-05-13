import { useGetTodo } from './utils/api';

export const App = () => {
  const { data } = useGetTodo({ params: { id: 1 } });

  return <code>{JSON.stringify(data)}</code>;
};
