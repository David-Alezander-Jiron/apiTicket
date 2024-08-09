<template>
    <div class="editar-participante">
      <div class="form-container">
        <h2>Editar Participante</h2>
        <form @submit.prevent="editarParticipante">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" v-model="participant.nombre" id="nombre" required />
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" v-model="participant.apellido" id="apellido" required />
          </div>
          <div class="form-group">
            <label for="correo">Correo:</label>
            <input type="email" v-model="participant.correo" id="correo" required />
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="tel" v-model="participant.telefono" id="telefono" required />
          </div>
          <div class="buttons">
            <button type="submit" class="btn guardar">Guardar Cambios</button>
            <button type="button" class="btn cancelar" @click="cancelar">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditarParticipante',
    data() {
      return {
        participant: {
          nombre: '',
          apellido: '',
          correo: '',
          telefono: ''
        }
      };
    },
    methods: {
      editarParticipante() {
        // Lógica para editar participante
        console.log('Editar participante:', this.participant);
        // Redirigir a la ruta /participantes
        this.$router.push('/participantes');
      },
      cancelar() {
        // Lógica para cancelar
        this.participant.nombre = '';
        this.participant.apellido = '';
        this.participant.correo = '';
        this.participant.telefono = '';
        // Redirigir a la ruta /participantes
        this.$router.push('/participantes');
      }
    }
  };
  </script>
  
  <style scoped>
  .editar-participante {
    background-color: white;
    border: 1px solid black;
    padding: 20px;
    border-radius: 5px;
    width: 1000px;
    margin: 100px auto; /* Ajusta el valor de margin-top para bajar el contenido */
  }
  
  .form-container {
    text-align: left;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #000;
    border-radius: 4px;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px; /* Espacio entre los botones, ajusta según sea necesario */
  }
  
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn.guardar {
    background-color: #17A1FA; /* Color verde para el botón de guardar */
  }
  
  .btn.cancelar {
    background-color: #ff3b30;
  }
  
  .btn:hover {
    background-color: #007bff; /* Mantén el mismo color de fondo */
    color: white; /* Mantén el mismo color de texto */
  }
  </style>
  