<template>
    <div class="crear-participante">
      <div class="form-container">
        <h2>Gestión de participantes</h2>
        <form @submit.prevent="agregarParticipante">
          <div class="form-group">
            <label for="nombre">Nombre*:</label>
            <input type="text" id="nombre" v-model="nombre" placeholder="Nombre" required />
          </div>
          <div class="form-group">
            <label for="apellido">Apellido*:</label>
            <input type="text" id="apellido" v-model="apellido" placeholder="Apellido" required />
          </div>
          <div class="form-group">
            <label for="correo">Correo*:</label>
            <input type="email" id="correo" v-model="correo" placeholder="Correo electrónico" required />
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono*:</label>
            <input type="tel" id="telefono" v-model="telefono" placeholder="Teléfono" required />
          </div>
          <div class="buttons">
            <button type="submit" class="btn agregar">Agregar</button>
            <button type="button" class="btn cancelar" @click="cancelar">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CrearParticipante',
    data() {
      return {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: ''
      };
    },
    methods: {
      agregarParticipante() {
        // Lógica para agregar participante
        console.log('Agregar participante:', {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo,
          telefono: this.telefono
        });
        // Redirigir a la ruta /participantes
        this.$router.push('/participantes');
      },
      cancelar() {
        // Lógica para cancelar
        this.nombre = '';
        this.apellido = '';
        this.correo = '';
        this.telefono = '';

        // Redirigir a la ruta /participantes
        this.$router.push('/participantes');
      }
    }
  };
  
  </script>
  
  <style scoped>
  .crear-participante {
    background-color: white;
    border: 1px solid black;
    padding: 20px;
    border-radius: 5px;
    width: 1000px;
    margin: 100px auto;
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
    gap: 10px;
  }
  
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn.cancelar {
    background-color: #ff3b30;
  }
  
  .btn:hover {
    opacity: 1;
  }
  </style>
  