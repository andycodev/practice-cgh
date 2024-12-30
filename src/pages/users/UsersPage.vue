<template>
  <v-container>
    <div class="d-flex justify-space-between align-center flex-column flex-sm-row mb-2">
      <div class="text-truncate">
        <p class="text-h6">
          <v-icon icon="mdi-account-group" :size="30"></v-icon>
           {{ title }}
        </p>
        <p
          class="text-grey text-body-2 text-truncate ms-9">
          Administración y control de usuarios del sistema.
        </p>
      </div>
      <div class="d-flex justify-center align-center my-2 my-sm-0">
        <v-btn
          v-tooltip:top="'Descargar archivo Excel'"
          prepend-icon="mdi-file-excel-outline"
          color="teal-accent-4"
          class="me-2">
          Excel
        </v-btn>
        <v-btn
          v-tooltip:top="'Registrar un nuevo usuario'"
          prepend-icon="mdi-plus"
          color="primary" >
          Nuevo
        </v-btn>
      </div>
    </div>
    <v-card flat>
      <v-card-title>
        <div class="d-flex justify-start align-center flex-column flex-sm-row">
          <div class="d-flex align-center">
            <p class="mx-2 text-subtitle-2">Total de registros: {{ users?.length }}</p>
            <v-btn icon  v-tooltip:top="'Actualizar registros'" size="x-small" color="primary" variant="tonal" @click.prevent="refetchUsers">
              <v-icon icon="mdi-reload"></v-icon>
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <div class="w-100 w-sm-50">
            <v-text-field
              v-model="search"
              variant="solo-filled"
              density="compact"
              clearable
              flat
              rounded="xl"
              hide-details
              placeholder="Buscar usuario por nombre o email">
            </v-text-field>
          </div>
        </div>
      </v-card-title>

      <IsLoadingComponent :isLoading="isLoadingUsers" :isReady="isRefetchingUsers" />

      <template v-if="isErrorUsers">
        <v-alert
          closable
          density="compact"
          :text="errorUsers?.message"
          title="Error al cargar los usuarios"
          type="error"
        ></v-alert>
      </template>

      <v-data-table
        :items="users"
        v-model:search="search"
        :headers="headers"
        item-value="id"
        density="comfortable"
        class="elevation-1"
        no-data-text="No se encontraron registros"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td class="text-truncate">
              <v-avatar color="lime-lighten-1" size="32">
                <span class="text-body-2">{{ getInitials(item.name) }}</span>
              </v-avatar>
              <span class="ms-2 font-weight-medium">{{ item.name }}</span>
            </td>
            <td>{{ item.email }}</td>
            <td>
              {{ `${item.address.city}, ${item.address.street}, ${item.address.suite}` }}
            </td>
            <td>{{ item.company.name }}</td>
            <td class="text-truncate">
              <v-icon icon="mdi-phone text-grey"></v-icon>
              {{ item.phone }}
            </td>
            <td>{{ item.website }}</td>
            <td class="text-center">
              <v-btn v-tooltip:bottom="'Acciones para el usuario'" size="x-small" icon variant="tonal" class="ms-2"
                     color="primary">
                <v-icon icon="mdi-menu-down"></v-icon>
                <v-menu activator="parent" location="bottom end"
                        transition="fade-transition">
                  <v-list density="compact" min-width="250" rounded="lg" slim>
                    <v-list-item prepend-icon="mdi-key-chain"
                                 title="Configurar accesos" link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-circle-edit-outline"
                                               class="text-primary"
                                 title="Editar usuario" link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-delete-outline"
                                 class="text-pink-accent-3"
                                 title="Eliminar usuario" link>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>

    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import useUsersPage from "./useUsersPage";
import IsLoadingComponent from "@/components/IsLoadingComponent.vue";

// Composables
const { title, search, headers, useGetUsers, getInitials } = useUsersPage();
const { data: users, isLoading: isLoadingUsers, error: errorUsers, isError: isErrorUsers, refetch: refetchUsers, isRefetching: isRefetchingUsers } = useGetUsers();

</script>

<style scoped></style>
