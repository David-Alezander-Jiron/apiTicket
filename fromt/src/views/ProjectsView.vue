<template>
  <div class="container">
    <div class="table-container">
      <h2>Lista de Organizador</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Teléfono</th>
            <th>Rol ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombres }}</td>
            <td>{{ usuario.apellidos }}</td>
            <td>{{ usuario.telefono }}</td>
            <td>{{ usuario.rol_id }}</td>
            <td>
              <div class="btn-group" role="group">
                <router-link :to="{ name: 'EditarUsuario', params: { id: usuario.id } }" class="btn btn-primary">Editar</router-link>
                <button type="button" @click="borrarUsuario(usuario.id)" class="btn btn-danger">Eliminar</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/usuarios/crear" class="btn btn-primary">Agregar Organizador</router-link>
  </div>
</template>

<script>
export default {
  name: 'ListarUsuarios',
  
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-right: 650px;
  margin-top: -25px;
}
.table-container {
  background-color: #f8f9fa;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  width: 1110px;
  
}
.table {
  margin-top: 20px;
}
.btn-group {
  display: flex;
  gap: 10px;
}
h2 {
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
