<template>
  <div class="opciones-evento">
    <h1>Opciones de Eventos</h1>
    
    <div class="section">
      <h2>Información del Evento</h2>
      <label for="nombre">Nombre del Evento:</label>
      <input v-model="evento.nombre" type="text" id="nombre" required>
      
      <label for="descripcion">Descripción:</label>
      <textarea v-model="evento.descripcion" id="descripcion" rows="4" required></textarea>
      
      <label for="fecha-inicio">Fecha y Hora de Inicio:</label>
      <input v-model="evento.fechaInicio" type="datetime-local" id="fecha-inicio" required>
      
      <label for="fecha-fin">Fecha y Hora de Fin:</label>
      <input v-model="evento.fechaFin" type="datetime-local" id="fecha-fin" required>
      
      <label for="ubicacion">Ubicación:</label>
      <input v-model="evento.ubicacion" type="text" id="ubicacion">
    </div>
    
    <div class="section">
      <h2>Organizador</h2>
      <label for="organizador-nombre">Nombre del Organizador:</label>
      <input v-model="evento.organizadorNombre" type="text" id="organizador-nombre">
      
      <label for="organizador-contacto">Contacto del Organizador:</label>
      <input v-model="evento.organizadorContacto" type="text" id="organizador-contacto">
      
      <label for="organizador-email">Email del Organizador:</label>
      <input v-model="evento.organizadorEmail" type="email" id="organizador-email">
    </div>

    <div class="section">
      <h2>Personal Asignado</h2>
      <div class="recuadro">
        <label for="personal-nombre">Nombre del Personal:</label>
        <input v-model="evento.personalNombre" type="text" id="personal-nombre">
        
        <label for="personal-rol">Rol del Personal:</label>
        <input v-model="evento.personalRol" type="text" id="personal-rol">
        
        <label for="personal-contacto">Contacto del Personal:</label>
        <input v-model="evento.personalContacto" type="text" id="personal-contacto">
        
        <button @click="añadirPersonal">Añadir Personal</button>
      </div>
    </div>
    
    <div class="section">
      <h2>Participantes</h2>
      <div class="recuadro">
        <label for="participantes-lista">Lista de Participantes:</label>
        <textarea v-model="evento.participantesLista" id="participantes-lista" rows="4" placeholder="Nombre del participante, email, etc."></textarea>
        
        <button @click="añadirParticipante">Añadir Participante</button>
      </div>
    </div>
    
    <div class="section">
      <h2>Patrocinadores</h2>
      <div class="recuadro">
        <label for="patrocinadores-lista">Lista de Patrocinadores:</label>
        <textarea v-model="evento.patrocinadoresLista" id="patrocinadores-lista" rows="4" placeholder="Nombre del patrocinador, información de contacto, etc."></textarea>
        
        <button @click="añadirPatrocinador">Añadir Patrocinador</button>
      </div>
    </div>
    
    <div class="section">
      <h2>Configuración de Entradas</h2>
      <div class="recuadro">
        <label for="tipo-tickets">Tipo de Tickets:</label>
        <select v-model="evento.tipoTickets" id="tipo-tickets" multiple>
          <option value="general">General</option>
          <option value="vip">VIP</option>
          <option value="early-bird">Early Bird</option>
        </select>
        
        <label for="precios">Precios:</label>
        <input v-model="evento.precios" type="text" id="precios" placeholder="General: 50, VIP: 100, Early Bird: 40">
        
        <label for="descuentos">Descuentos:</label>
        <input v-model="evento.descuentos" type="text" id="descuentos" placeholder="PROMO10: 10% de descuento">
        
        <button @click="añadirEntrada">Añadir Entrada</button>
      </div>
    </div>
    
    <div class="section">
      <h2>Opciones de Configuración</h2>
      <label for="tipo-evento">Tipo de Evento:</label>
      <select v-model="evento.tipoEvento" id="tipo-evento">
        <option value="conferencia">Conferencia</option>
        <option value="seminario">Seminario</option>
        <option value="taller">Taller</option>
      </select>
      
      <label for="categoria">Categoría:</label>
      <select v-model="evento.categoria" id="categoria">
        <option value="tecnologia">Tecnología</option>
        <option value="negocios">Negocios</option>
        <option value="educacion">Educación</option>
      </select>
      
      <label for="capacidad">Capacidad:</label>
      <input v-model.number="evento.capacidad" type="number" id="capacidad" min="1">
      
      <label for="privacidad">Privacidad:</label>
      <select v-model="evento.privacidad" id="privacidad">
        <option value="publico">Público</option>
        <option value="privado">Privado</option>
        <option value="invitacion">Con invitación</option>
      </select>
    </div>
    
    <div class="section">
      <h2>Opciones de Venta y Registro</h2>
      <label>
        <input v-model="evento.ventaOnline" type="checkbox" id="venta-online">
        Habilitar venta en línea
      </label>
      <label>
        <input v-model="evento.registroPrevio" type="checkbox" id="registro-previo">
        Permitir registro previo
      </label>
    </div>
    
    <div class="section">
      <h2>Personalización</h2>
      <label for="imagen-evento">Imagen del Evento:</label>
      <input @change="handleImageUpload" type="file" id="imagen-evento" accept="image/*">
      
      <label for="color-tema">Color del Tema:</label>
      <input v-model="evento.colorTema" type="color" id="color-tema">
    </div>
    
    <div class="section">
      <h2>Notificaciones</h2>
      <label>
        <input v-model="evento.enviarRecordatorios" type="checkbox" id="recordatorios">
        Enviar recordatorios por correo electrónico
      </label>
      <label>
        <input v-model="evento.enviarActualizaciones" type="checkbox" id="actualizaciones">
        Enviar actualizaciones a los participantes
      </label>
    </div>
    
    <div class="section">
      <h2>Reportes y Análisis</h2>
      <button @click="verResumenVentas">Ver Resumen de Ventas</button>
      <button @click="verAsistenciaEsperada">Ver Asistencia Esperada</button>
      <button @click="verComentarios">Ver Comentarios</button>
    </div>
    
    <div class="section">
      <h2>FAQ y Soporte</h2>
      <p>Para preguntas frecuentes, visite nuestra sección de <a href="#">FAQ</a>.</p>
      <p>Para soporte, contacte a: <a href="mailto:soporte@eventos.com">soporte@eventos.com</a></p>
    </div>
    
    <button @click="guardarConfiguracion">Guardar Configuración del Evento</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const evento = ref({
  nombre: '',
  descripcion: '',
  fechaInicio: '',
  fechaFin: '',
  ubicacion: '',
  organizadorNombre: '',
  organizadorContacto: '',
  organizadorEmail: '',
  personalNombre: '',
  personalRol: '',
  personalContacto: '',
  participantesLista: '',
  patrocinadoresLista: '',
  tipoEvento: 'conferencia',
  categoria: 'tecnologia',
  capacidad: 100,
  privacidad: 'publico',
  tipoTickets: [],
  precios: '',
  descuentos: '',
  ventaOnline: false,
  registroPrevio: false,
  imagenEvento: null,
  colorTema: '#3498db',
  enviarRecordatorios: false,
  enviarActualizaciones: false
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  console.log('Imagen cargada:', file.name);
};

const verResumenVentas = () => {
  console.log('Ver resumen de ventas');
};

const verAsistenciaEsperada = () => {
  console.log('Ver asistencia esperada');
};

const verComentarios = () => {
  console.log('Ver comentarios');
};

const guardarConfiguracion = () => {
  console.log('Configuración guardada:', evento.value);
};

const añadirPersonal = () => {
  console.log('Añadir personal:', evento.value.personalNombre);
  
};

const añadirParticipante = () => {
  console.log('Añadir participante:', evento.value.participantesLista);
  
};

const añadirPatrocinador = () => {
  console.log('Añadir patrocinador:', evento.value.patrocinadoresLista);
  
};

const añadirEntrada = () => {
  console.log('Añadir entrada:', evento.value.tipoTickets, evento.value.precios, evento.value.descuentos);
  
};
</script>

<style scoped>
.opciones-evento {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
}

h1, h2 {
  color: #2c3e50;
}

.section {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="datetime-local"],
select,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.recuadro {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  margin-bottom: 10px;
}
</style>



  