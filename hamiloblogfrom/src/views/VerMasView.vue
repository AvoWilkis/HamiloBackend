<template>
    <!-- Page Header Start -->
    <div class="container py-5 px-2 bg-primary">
        <div class="row py-5 px-4">
            <div class="col-sm-6 text-center text-md-left">
                <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Detalle</h1>
            </div>
            <div class="col-sm-6 text-center text-md-right">
                <div class="d-inline-flex pt-2">
                    <h4 class="m-0 text-white">
                        <!-- <a class="text-white" href="#">Inicio</a> -->
                        <RouterLink to="/" class="text-white">Inicio</RouterLink>
                    </h4>
                    <h4 class="m-0 text-white px-2">/</h4>
                    <h4 class="m-0 text-white">Detalle</h4>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- Blog Detail Start -->
    <div class="container py-5 px-2 bg-white">
        <div class="row px-4">
            <div class="col-12">
                <img class="img-fluid mb-4" :src="post.imagen" alt="Image" />
                <h2 class="mb-3 font-weight-bold">{{ post.titulo }}</h2>
                <div class="d-flex">
                    <p class="mr-3 text-muted">
                        <i class="fa fa-calendar-alt"></i> {{ post.fecha_publicacion }}
                    </p>
                    <p class="mr-3 text-muted">
                        <i class="fa fa-folder"></i> {{ post.categoria ? post.categoria.nombre : "" }}
                    </p>
                    <p class="mr-3 text-muted">
                        <i class="fa fa-comments"></i> {{ post.cant_comentarios }} Comentarios
                    </p>
                </div>
                <p>{{ post.resumen }}</p>
                <div v-html="post.contenido"></div>
            </div>
            <div class="col-12 py-4">
                <button v-for="tag in post.tags" :key="tag" @click="filtrar(tag)"
                    class="btn btn-sm btn-outline-primary mb-1">
                    {{ tag }}
                </button>
            </div>

            <div class="col-12 py-4">
                <div class="btn-group btn-group-lg w-100">
                    <button @click="cambiarPost('anterior')" type="button" class="btn btn-outline-primary">
                        <i class="fa fa-angle-left mr-2"></i> Anterior
                    </button>
                    <button @click="cambiarPost('siguiente')" type="button" class="btn btn-outline-primary">
                        Siguiente<i class="fa fa-angle-right ml-2"></i>
                    </button>
                </div>
            </div>

            <div class="col-12 py-4">
                <h3 class="mb-4 font-weight-bold">{{ post.cant_comentarios }} Comentarios</h3>
                <div v-for="coment in post.comentarios" :key="coment" class="media mb-4">
                    <img :src="'https://ui-avatars.com/api/?name=' +
                        coment.usuario.name +
                        '&background=007bff&color=fff'
                        " alt="Image" class="mr-3 mt-1 rounded-circle" style="width: 60px" />
                    <div class="media-body">
                        <h4>
                            {{ coment.usuario.name }}
                            <small><i>{{ coment.fecha }}</i></small>
                        </h4>
                        <p>{{ coment.comentario }}</p>
                        <!-- <button class="btn btn-sm btn-light">Reply</button> -->
                    </div>
                </div>
            </div>

            <div v-if="token" class="col-12">
                <h3 class="mb-4 font-weight-bold">Escribe un comentario</h3>

                <div v-show="enviado == true" class="alert alert-success">
                    Tu comentario se envió correctamente!
                </div>

                <div class="form-group">
                    <label for="comentario">Tu Comentario *</label>
                    <textarea id="comentario" v-model="comentario" cols="30" rows="5" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <button type="button" @click="enviarComentario()" class="btn btn-primary">
                        Enviar comentario
                    </button>
                </div>
            </div>
            <div v-else class="col-12">
                <p>Registrate o inicia sesión: </p>
                <RouterLink to="/auth" class="btn btn-primary">Ingresar</RouterLink>
            </div>
        </div>
    </div>
    <!-- Blog Detail End -->
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const post = ref({});
        let idPost = router.currentRoute.value.params.id;
        const baseUrl = "http://hamiloblog.test/api";

        const token = localStorage.getItem("token");
        const enviado = ref(false);
        const comentario = ref("");

        onMounted(() => {
            console.log(idPost);
            localStorage.setItem('ultimoPost', idPost);
            obtenerDatos();
        });

        const obtenerDatos = async () => {
            try {
                const { data } = await axios.get(baseUrl + "/posts/" + idPost);
                post.value = data.datos;
                console.log(data.datos);
                window.scrollTo(0, 0);
            } catch (error) {
                console.log(error);
            }
        };

        const filtrar = (param) => {
            router.push({ path: "/blog/" + param });
        };
        const cambiarPost = async (param) => {
            try {
                const { data } = await axios.get(baseUrl + "/posts/" + idPost + "/" + param);
                let nuevoId = data.postId;
                if (nuevoId != idPost) {
                    router.push({ path: "/vermas/" + nuevoId });
                    idPost = nuevoId;
                    obtenerDatos();
                } else {
                    alert("No hay más Posts!");
                }
                // post.value = data.datos;
            } catch (error) {
                console.log(error);
            }
        };
        const enviarComentario = async () => {
            if (comentario.value == "") {
                alert("Escriba un comentario");
                return;
            }
            try {
                const { data } = await axios.post(
                    baseUrl + "/comentarios",
                    {
                        post_id: idPost,
                        comentario: comentario.value,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: "Bearer " + token,
                        },
                    }
                );
                enviado.value = true;
                comentario.value = '';
                setTimeout(() => {
                    enviado.value = false;
                    obtenerDatos();
                },1000);
            } catch (error) {
                console.log(error);
            }
        };

        return {
            idPost,
            post,
            filtrar,
            cambiarPost,
            token,
            enviado,
            comentario,
            enviarComentario,
        };
    },
};
</script>

<style scoped></style>
