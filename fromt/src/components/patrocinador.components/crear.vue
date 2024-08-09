<template>
    <div class="background">
      <h2>Crear Patrocinador</h2>
      <form @submit.prevent="createSponsor">
        <label>Nombre:</label>
        <input v-model="nombre" type="text" required>
        <label>Apellido:</label>
        <input v-model="apellido" type="text" required>
        <label>Correo:</label>
        <input v-model="correo" type="email" required>
        <label>Teléfono:</label>
        <input v-model="telefono" type="text" required>
        <div class="button-group">
          <button type="submit" class="action-btn">Crear</button>
          <button type="button" class="cancel-btn" @click="cancelCreate">Cancelar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CrearPatrocinador',
    data() {
      return {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: ''
      };
    },
    methods: {
      createSponsor() {
        // Lógica para crear un patrocinador
        console.log('Patrocinador creado:', this.nombre, this.apellido, this.correo, this.telefono);
        // Aquí podrías redirigir a la lista de patrocinadores
        this.$router.push('/patrocinadores');
      },
      cancelCreate() {
        // Lógica para cancelar la creación y volver a la lista de patrocinadores
        this.$router.push('/patrocinadores');
      }
    }
  };
  </script>
  
  <style scoped>
  .background {
    border: 1px solid black;
    padding: 20px;
    max-width: 800px; /* Ajusta el ancho máximo según tu preferencia */
    margin: 80px auto; /* Centra horizontalmente */
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 10px;
  }
  input {
    padding: 5px;
    margin-top: 5px;
  }
  .button-group {
    display: flex;
    justify-content: flex-start; /* Cambia a flex-start para alinear los botones al inicio */
    gap: 10px; /* Ajusta el espacio entre los botones */
    margin-top: 20px;
    margin-left: 270px
  }
  .action-btn, .cancel-btn {
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  .cancel-btn {
    background-color: #f44336;
  }
  .cancel-btn:hover {
    background-color: #d32f2f;
  }
  .action-btn:hover {
    background-color: #0b7dda;
  }
  </style>
  