<template>
    <tr>
      <td>{{ evento.nombre }}
        <img src="@/assets/disco-tiago.jpg" alt="Imagen del evento" class="evento-imagen"/></td>
      <td>
        <router-link
          :to="`/pagina/${evento.id}`"
          class="btn btn-primary"
        >Ir a la Página</router-link>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    name: 'PaginaItem',
    props: {
      evento: Object
    }
  };
  </script>

<style scoped>
.evento-imagen {
  max-width: 100px;
  height: auto;
  display: block;
  margin-top: 10px;
  margin-left: 20px;
}
</style>
  