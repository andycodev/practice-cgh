import {ref} from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getUsersFn } from "@/services/user.service";

const useUsersPage = () => {
  const title: string = 'Listado de usuarios';
  const search = ref<string>('');
  const headers: any = [
    { title: 'Id', key: 'id' },
    { title: 'Nombre', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Dirección' },
    { title: 'Compañía' },
    { title: 'Teléfono' },
    { title: 'Website' },
    { title: 'Acciones', align: 'center' },
  ];

  const useGetUsers = () => {
    const { data, isLoading, error, isError, refetch, isRefetching } = useQuery({
      queryKey: ['users'],
      queryFn: () => getUsersFn()
    })
    return { data, isLoading, error, isError, refetch, isRefetching }
  }

  const getInitials = (name: string) => {
    return name.split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  };

  return {
    title,
    search,
    headers,
    useGetUsers,
    getInitials
  }
}
export default useUsersPage
