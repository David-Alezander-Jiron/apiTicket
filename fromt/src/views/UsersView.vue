<template>
  <div class="user-management">
    <h1>Administrador</h1>
    <h2>Gestión de Usuarios</h2>

    <form @submit.prevent="handleSubmit" class="user-form">
      <div class="form-group">
        <label for="name">Nombre de usuario:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="role">Rol:</label>
        <select id="role" v-model="form.role" required>
          <option value="Usuario">Usuario</option>
          <option value="Administrador">Administrador</option>
        </select>
      </div>
      <button type="submit">{{ isEditMode ? 'Actualizar Usuario' : 'Añadir Usuario' }}</button>
    </form>

    <!-- Ventana emergente para editar usuario -->
    <div v-if="showEditModal" class="edit-modal">
      <form @submit.prevent="handleEditSubmit" class="user-form">
        <div class="form-group">
          <label for="edit-name">Nombre de usuario:</label>
          <input type="text" id="edit-name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="edit-email">Email:</label>
          <input type="email" id="edit-email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="edit-role">Rol:</label>
          <select id="edit-role" v-model="form.role" required>
            <option value="Usuario">Usuario</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <div class="button-group">
          <button type="submit">Guardar Cambios</button>
          <button type="button" @click="cancelEdit">Cancelar</button>
        </div>
      </form>
    </div>

    <div class="user-list">
      <h3>Lista de Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre de usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="editUser(user)">Editar</button>
              <button @click="deleteUser(user.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mensaje de éxito -->
    <div v-if="showSuccessMessage" class="success-message">
      <p>Cambios guardados exitosamente.</p>
      <button @click="closeSuccessMessage">Aceptar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: null,
        name: '',
        email: '',
        role: 'Usuario'
      },
      users: [
        { id: 1, name: 'Carlos Ramirez', email: 'carlos.ramirez@example.com', role: 'Administrador' },
        { id: 2, name: 'Maria Fernanda', email: 'maria.fernanda@example.com', role: 'Usuario' },
        { id: 3, name: 'José Luis', email: 'jose.luis@example.com', role: 'Administrador' }
      ],
      isEditMode: false,
      showEditModal: false,
      showSuccessMessage: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.isEditMode) {
        this.updateUser();
      } else {
        this.addUser();
      }
    },
    addUser() {
      const newUser = { ...this.form, id: Date.now() };
      this.users.push(newUser);
      this.resetForm();
    },
    editUser(user) {
      this.form = { ...user };
      this.isEditMode = true;
      this.showEditModal = true; // Mostrar ventana emergente para editar
    },
    handleEditSubmit() {
      this.updateUser();
      this.showSuccessMessage = true; // Mostrar mensaje de éxito
    },
    updateUser() {
      const index = this.users.findIndex(user => user.id === this.form.id);
      if (index !== -1) {
        this.users.splice(index, 1, { ...this.form });
        this.resetForm();
        this.isEditMode = false;
        this.showEditModal = false; // Ocultar ventana emergente de edición
      }
    },
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id);
    },
    resetForm() {
      this.form = {
        id: null,
        name: '',
        email: '',
        role: 'Usuario'
      };
      this.isEditMode = false;
    },
    cancelEdit() {
      this.showEditModal = false; // Ocultar ventana emergente de edición
    },
    closeSuccessMessage() {
      this.showSuccessMessage = false; // Ocultar mensaje de éxito
    }
  }
};
</script>

<style scoped>
.user-management {
  padding: 70px;
  max-width: 800px;
  margin-top: -50px;
}

h1, h2 {
  text-align: center;
  margin-right: 250px;
}

.user-form {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, select, button {
  padding: 5px;
  font-size: 1em;
  width: 80%;
}

button {
  align-self: right;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
}

button:hover {
  background-color: #0056b3;
  
}

.user-list {
  margin-top: 10px;
}

table {
  width: 130%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

/* Estilos para la ventana emergente de edición */
.edit-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 400px;
  width: 100%;
}

.edit-modal form {
  display: flex;
  flex-direction: column;
}

.edit-modal label {
  margin-bottom: 5px;
}

.edit-modal input,
.edit-modal select,
.edit-modal button {
  margin-bottom: 10px;
}

.edit-modal button {
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
}

.edit-modal button:hover {
  background-color: #0056b3;
}

/* Estilos para el mensaje de éxito */
.success-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 300px;
  width: 100%;
  text-align: center;
}

.success-message p {
  margin-bottom: 10px;
}

.success-message button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;
}

.success-message button:hover {
  background-color: #0056b3;
}


@media (max-width: 600px) {
  .user-management {
    padding: 10px;
  }

  .user-form {
    margin-bottom: 15px;
  }

  .user-list table, .user-list th, .user-list td {
    display: block;
    width: 100%;
  }

  .user-list th, .user-list td {
    text-align: center; 
  }
}
</style>




