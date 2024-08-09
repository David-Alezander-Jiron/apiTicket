import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue'; // Importa el layout principal
import Dashboard from '@/views/DashboardView.vue';
import Evento from '@/views/Evento.vue';
import Projects from '@/views/ProjectsView.vue';
import Login from '@/views/register-login/LoginView.vue'; // Importa la vista de login
import RegisterNew from '@/views/register-login/Register.vue'; // Importa la vista de registro
import Error404 from '@/views/Pagina404.vue';
import Roles from '@/views/roles.vue'; // Importación única de Roles

// Rutas de usuarios
import ListadoUsuarios from '@/views/ListadoUsuarios.vue'; // Lista de usuarios
import CrearUsuario from '@/components/usuario.components/crear.vue'; // Crear usuario
import EditarUsuario from '@/components/usuario.components/editar.vue'; // Editar usuario

// Rutas de personal
import CrearPersonal from '@/components/personal.components/crear.vue';
import EditarPersonal from '@/components/personal.components/editar.vue';
import ListarPersonal from '@/views/Personal.vue';

// Rutas de eventos
import ListarEventos from '@/views/Evento.vue';
import NewEvento from '@/components/evento.components/crear.vue';
import EditarEvento from '@/components/evento.components/editar.vue';
import OpcionesEventos from '@/components/evento.components/OpcionesEventos.vue'; // Importa OpcionesEventos

// Rutas de participantes
import ListarParticipante from '@/views/ListarParticipante.vue';
import CrearParticipante from '@/components/participante.components/crear.vue';
import EditarParticipante from '@/components/participante.components/editar.vue';

// Rutas de patrocinadores
import ListarPatrocinador from '@/views/ListarPatrocinador.vue';
import CrearPatrocinador from '@/components/patrocinador.components/crear.vue';
import EditarPatrocinador from '@/components/patrocinador.components/editar.vue';

// Rutas de tickets
import Tickets from '@/views/Tickets.vue';
import crearTicket from './components/ticket.components/crear.vue';
import editarTicket from './components/ticket.components/editar.vue';

// Rutas Gestión páginas
import PaginaGestion from '@/components/paginas.components/PaginaGestion.vue';
import PaginaEvento from '@/components/paginas.components/PaginaEvento.vue';

const routes = [
  {
    path: '/',
    component: MainLayout, // Layout principal para las rutas principales
    children: [
      { path: '', component: Dashboard },
      { path: 'evento', component: Evento },
      { path: 'projects', component: Projects },

      // Rutas de usuarios
      { path: 'usuarios', component: ListadoUsuarios },
      { path: 'usuarios/crear', component: CrearUsuario },
      { path: 'usuarios/editar/:id', name: 'EditarUsuario', component: EditarUsuario },

      // Rutas de personal
      { path: 'personal/crear', component: CrearPersonal },
      { path: 'personal/editar/:id', name: 'EditarPersonal', component: EditarPersonal },
      { path: 'personal', component: ListarPersonal },

      // Rutas de eventos
      { path: 'eventos', component: ListarEventos },
      { path: 'eventos/crear', component: NewEvento },
      { path: 'eventos/editar/:id', name: 'EditarEvento', component: EditarEvento },
      { path: 'eventos/opciones', component: OpcionesEventos }, // Cambiado aquí

      // Rutas de participantes
      { path: 'participantes', component: ListarParticipante },
      { path: 'participantes/crear', component: CrearParticipante },
      { path: 'participantes/editar/:id', name: 'EditarParticipante', component: EditarParticipante },

      // Rutas de patrocinadores
      { path: 'patrocinadores', component: ListarPatrocinador },
      { path: 'patrocinadores/crear', component: CrearPatrocinador },
      { path: 'patrocinadores/editar/:id', name: 'EditarPatrocinador', component: EditarPatrocinador },

      // Rutas de tickets
      { path: 'tickets', component: Tickets },
      { path: 'tickets/crear', component: crearTicket },
      { path: 'tickets/editar/:id', name: 'EditarTicket', component: editarTicket },

      // Gestión páginas
      { path: '/pagina-gestion', component: PaginaGestion },
      { path: '/pagina/:id', component: PaginaEvento }
    ]
  },
  {
    path: '/roles',
    component: Roles,

  },
  {
    path: '/login',
    component: Login, // Usa el componente de login para esta ruta
    meta: { layout: 'login' } // Etiqueta para indicar el layout específico
  },
  {
    path: '/register',
    component: RegisterNew // Usa el componente de registro para esta ruta
  },
 

  // Error 404
  {
    path: '/:pathMatch(.*)*',
    component: Error404,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;




