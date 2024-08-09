<template>
    <div class="container">
        <div class="error-message">
            <img src="@/assets/logopra.png" alt="Logo" />
            <h1>404</h1>
            <div class="pagAzul">
                <h2>No hemos encontrado la página que buscas.</h2>
                <p>Tal vez estas páginas te puedan ayudar a encontrar lo que buscas:</p>
                <ul>
                    <li><a href="/">Página de inicio</a></li>
                    <li><a href="/eventos">Eventos</a></li>

                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "NotPag",
};
</script>

<style scoped>
.pagAzul {
    background-color: #20242b;
    width: 100vw;
    /* Ocupa todo el ancho de la pantalla */
    padding: 70px;
    /* Ajusta el padding según sea necesario */
    box-sizing: border-box;
    /* Incluye el padding dentro del ancho total */

}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ffffff;
}

.error-message {
    text-align: center;
}

.error-message img {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
}

.error-message h1 {
    font-size: 48px;
    font-weight: bold;
    color: #333;
    font-size: 8em; /* Ajusta el tamaño según tus necesidades */
  font-weight: bold; /* Opcional: ajusta el peso de la fuente */
  line-height: 1.2; /* Opcional: ajusta la altura de línea */
  color: #333; /* Opcional: ajusta el color del texto */
}

.error-message h2 {
    font-size: 24px;
    font-weight: normal;
    color: #666;
}

.error-message p {
    font-size: 16px;
    font-weight: normal;
    color: #999;
    margin-top: 20px;
}

.error-message ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

.error-message ul li {
    margin-bottom: 10px;
}

.error-message ul a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}


</style>