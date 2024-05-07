<template>

    <!-- Page Header Start -->
    <div class="container py-5 px-2 bg-primary">
        <div class="row py-5 px-4">
            <div class="col-sm-6 text-center text-md-left">
                <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">SObre mi</h1>
            </div>
            <div class="col-sm-6 text-center text-md-right">
                <div class="d-inline-flex pt-2">
                    <h4 class="m-0 text-white">
                        <!-- <a class="text-white" href="#">Inicio</a> -->
                        <RouterLink to="/" class="text-white">Inicio</RouterLink>
                    </h4>
                    <h4 class="m-0 text-white px-2">/</h4>
                    <h4 class="m-0 text-white">Sobre mi</h4>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->
    <!-- About Start -->
    <div class="container bg-white pt-5">
                <div class="row px-3 pb-5">
                    <div class="col-md-12">
                        <h2 class="mb-4 font-weight-bold">Dev fullstack con amplia experiencia</h2>
                        <img class="img-fluid float-left w-50 mr-4 mb-3" src="/perfil.jpg" alt="Image">
                        <p class="m-0">
                            "Un desarrollador full stack es como un arquitecto digital. Imagina que diseña y construye casas digitales: desde los planos y la estructura exterior (el front-end) hasta los sistemas de plomería y electricidad que hacen que todo funcione (el back-end). Es como ser un maestro constructor moderno, capaz de trabajar en todos los aspectos de un proyecto de construcción digital.
<br>
En el lado del cliente, este desarrollador es creativo y visual. Utiliza lenguajes como HTML, CSS y JavaScript para diseñar interfaces de usuario atractivas y fáciles de usar, asegurándose de que cada botón y cada página se sientan intuitivos y agradables.
<br>
Pero no se detiene ahí. También es un experto en el lado del servidor, donde trabaja con bases de datos y lenguajes de programación como Python, JavaScript para construir la infraestructura detrás de la interfaz de usuario. Es como el cerebro detrás de la belleza, asegurándose de que todo funcione sin problemas y de manera eficiente.
<br>
Un desarrollador full stack es como un mago de la tecnología, capaz de combinar arte y ciencia para crear experiencias digitales impresionantes. Es una combinación única de creatividad y habilidad técnica, con una pasión por construir cosas que hacen que el mundo digital sea un lugar mejor y más emocionante."
                        </p>
                    </div>
                    <div class="col-md-12 pt-4">
                        <div class="d-flex flex-column skills">

                            <div class="progress w-100 mb-4">
                                <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML</div>
                            </div>
                            <div class="progress w-100 mb-4">
                                <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">CSS</div>
                            </div>
                            <div class="progress w-100 mb-4">
                                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                            </div>
                            <div class="progress w-100 mb-4">
                                <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Vue</div>
                            </div>
                            <div class="progress w-100 mb-4">
                                <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">PHP</div>
                            </div>
                            <div class="progress w-100 mb-4">
                                <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Laravel</div>
                            </div>
                            <div class="progress w-100 mb-4">
                                <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">API REST</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About End -->



</template>

<script>
    import axios from 'axios';
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const router = useRouter();
            const categorias = ref([]);

            const baseUrl = 'http://hamiloblog.test/api';

            onMounted(() => {
            })


            return {

            }
        }
    }
</script>

<style scoped>

</style>
