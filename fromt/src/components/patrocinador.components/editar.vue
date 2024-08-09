<template>
    <div class="background">
      <h2>Editar Patrocinador</h2>
      <form @submit.prevent="updateSponsor">
        <label>Nombre:</label>
        <input v-model="sponsor.nombre" type="text" required>
        <label>Descripción:</label>
        <textarea v-model="sponsor.descripcion" required></textarea>
        <label>Correo:</label>
        <input v-model="sponsor.correo" type="email" required>
        <div class="button-group">
          <button type="submit" class="action-btn">Actualizar</button>
          <button type="button" class="cancel-btn" @click="cancelEdit">Cancelar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditarPatrocinador',
    data() {
      return {
        sponsor: {
          nombre: '',
          descripcion: '',
          correo: ''
        }
      };
    },
    created() {
      const sponsorId = this.$route.params.id;
      // Aquí deberías cargar los datos del patrocinador usando el sponsorId
      // Por ejemplo, podrías hacer una solicitud a la API para obtener los datos del patrocinador
      this.loadSponsor(sponsorId);
    },
    methods: {
      loadSponsor(sponsorId) {
        // Simulación de carga de datos, reemplaza esto con la lógica real
        const sponsors = [
          { id: 0, nombre: 'Kevin', descripcion: 'Patrocinador principal', correo: 'kevinmar@gmail.com' },
          { id: 1, nombre: 'Angel', descripcion: 'Patrocinador secundario', correo: 'angelher@gmail.com' },
          { id: 2, nombre: 'Alejandro', descripcion: 'Patrocinador terciario', correo: 'alejandro@gmail.com' }
        ];
        const sponsor = sponsors.find(s => s.id === parseInt(sponsorId));
        if (sponsor) {
          this.sponsor = sponsor;
        }
      },
      updateSponsor() {
        // Lógica para actualizar un patrocinador
        console.log('Patrocinador actualizado:', this.sponsor);
        // Aquí podrías redirigir a la lista de patrocinadores
        this.$router.push('/patrocinadores');
      },
      cancelEdit() {
        // Lógica para cancelar la edición y volver a la lista de patrocinadores
        this.$router.push('/patrocinadores');
      }
    }
  };
  </script>
  
  <style scoped>
  .background {
    border: 1px solid black;
    padding: 20px;
    max-width: 600px; /* Ajusta el ancho máximo según tu preferencia */
    margin: 40px auto; /* Centra horizontalmente */
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 10px;
  }
  input, textarea {
    padding: 5px;
    margin-top: 5px;
  }
  textarea {
    resize: vertical; /* Permite redimensionar verticalmente */
  }
  .button-group {
  display: flex;
  justify-content: flex-start; /* Cambia a flex-start para alinear los botones al inicio */
  gap: 10px; /* Ajusta el espacio entre los botones */
  margin-top: 20px;
  margin-left: 180px
}
.action-btn, .cancel-btn {
  background-color: #17A1FA;
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
  background-color: #17A1FA;
}

  </style>
  