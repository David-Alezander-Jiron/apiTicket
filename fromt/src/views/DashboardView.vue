<template>
  <div class="main-content">
    <div class="stat-cards">
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts1.png" alt="Icon 1" />
        </div>
        <div class="stat-info">
          <h3>Usuarios Registrados</h3>
          <p>7,842,900</p>
          <router-link to="/" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts2.png" alt="Icon 2" />
        </div>
        <div class="stat-info">
          <h3>Ventas de Tickets</h3>
          <p>180,200</p>
          <router-link to="/tickets" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts3.png" alt="Icon 3" />
        </div>
        <div class="stat-info">
          <h3>Eventos Próximos</h3>
          <p>38,900</p>
          <router-link to="/" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts4.png" alt="Icon 4" />
        </div>
        <div class="stat-info">
          <h3>Nuevos Comentarios</h3>
          <p>3,988</p>
          <router-link to="/comentarios" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
    </div>
    
    <div class="notification-cards">
      <div class="card notification-card">
        <h3>Notificaciones</h3>
        <p>Nuevas notificaciones de las ventas de tickets del evento Próximo a destacar</p>
        <a href="#">Ver detalles</a>
        <span class="notification-dot"></span>
      </div>
      <div class="card event-card">
        <div class="ticket">
          <div class="ticket-details">
            <h3>NOMBRE DEL EVENTO</h3>
            <p>@ DEL EVENTO</p>
            <p>10/12/2023 | 10:00 PM</p>
            <p>ACCESO 21:00 PM</p>
            <p>PALCO FICO'S</p>
            <p>¡Un evento inigualable!</p>
          </div>
          <div class="ticket-price">
            <p>$18</p>
          </div>
        </div>
      </div>
    </div>

    <div class="extra-cards">
      <div class="card highlight-events-card">
        <h3>Próximos eventos a destacar</h3>
        <div class="highlight-event">
          <h4>Concierto de rock</h4>
          <p>Fecha: 20 de Julio, 2024</p>
          <p>Ubicación: Estadio Nacional</p>
          <p>Descripción: Un increíble concierto con las mejores bandas de rock del momento.</p>
        </div>
        <div class="highlight-event">
          <h4>Feria de Tecnología</h4>
          <p>Fecha: 15 de Agosto, 2024</p>
          <p>Ubicación: Centro de Convenciones</p>
          <p>Descripción: La feria más grande de tecnología con expositores de todo el mundo.</p>
        </div>
        <div class="highlight-event">
          <h4>Festival de Cine</h4>
          <p>Fecha: 5 de Septiembre, 2024</p>
          <p>Ubicación: Teatro Principal</p>
          <p>Descripción: Disfruta de las mejores películas y cortometrajes del año.</p>
        </div>
        <div class="highlight-event">
          <h4>Evento de Jazz en el Parque</h4>
          <p>Fecha: 10 de Octubre, 2024</p>
          <p>Ubicación: Parque Central</p>
          <p>Descripción: Únete a nosotros para una velada inolvidable de jazz bajo las estrellas.</p>
        </div>
      </div>
      <div class="card map-card">
        <h3>Vista del mapa de más ventas de tickets de eventos</h3>
        <div class="map-details">
          <p><strong>Mapa tiempo real</strong></p>
          <p>08 de julio de 2024</p>
          <img src="@/assets/mapa.png" alt="Mapa" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.stat-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.stat-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(25% - 20px); /* Ajusta el tamaño de cada tarjeta de estadísticas */
  position: relative;
  overflow: hidden;
  font-family: Arial, sans-serif;
  margin-left: auto;
}

.stat-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100%; /* Ajusta el ancho al 100% del contenedor */
  height: auto;
  pointer-events: none; /* Evita que la imagen interfiera con eventos del ratón */
  z-index: 0; /* Asegura que esté detrás del contenido de .stat-info */
  opacity: 0.6; /* Ajusta la opacidad de la imagen */
}

.stat-icon img {
  width: 100%; /* Ajusta el tamaño del ícono para llenar completamente .stat-icon */
  height: auto;
  display: block; /* Asegura que la imagen se comporte correctamente como fondo */
}

.stat-info {
  position: relative; /* Cambia a posición relativa */
  z-index: 1; /* Asegura que esté delante de .stat-icon */
}

.stat-info h3 {
  margin: 0;
  font-size: 18px;
  color: #000;
}

.stat-info p {
  margin: 5px 0;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.stat-info a {
  color: #ffffff;
  text-decoration: none;
}

.stat-info a:hover {
  text-decoration: underline;
}

.custom-link {
  text-decoration: none; /* Elimina el subrayado predeterminado */
  font-weight: bold; /* Opcional: Añade negrita u otro estilo de fuente */
}

.custom-link:hover {
  text-decoration: underline; /* Cambia el estilo al pasar el ratón sobre el enlace */
}

.notification-cards {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.card.notification-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 50%; /* Ajusta el tamaño de la tarjeta de notificaciones */
}

.notification-card h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.notification-card p {
  margin: 0 0 10px;
  color: #555;
  margin-right: 100px;
}
.notification-card a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.notification-dot {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
}

.card.event-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 50%; /* Ajusta el tamaño de la tarjeta de evento */
}

.ticket-details h3 {
  margin: 0 0 5px;
  font-size: 18px;
}

.ticket-details p {
  margin: 0 0 5px;
  color: #555;
}

.ticket-price p {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.extra-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
}

.card.highlight-events-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(50% - 20px); /* Ajusta el tamaño de la tarjeta de eventos destacados */
}

.highlight-events-card h3 {
  margin-bottom: 20px;
  font-size: 24px;
}

.highlight-event {
  background-color: #D8D2BF;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}

.highlight-event h4 {
  margin: 0 0 5px;
  font-size: 18px;
}

.highlight-event p {
  margin: 0 0 5px;
  color: #555;
  margin-right: 100px;
}

.card.map-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(50% - 20px); /* Ajusta el tamaño de la tarjeta de mapa */
}

.map-details p {
  margin: 0 0 10px;
  font-size: 16px;
}

.map-details img {
  width: 100%;
  border-radius: 8px;
}
</style>
