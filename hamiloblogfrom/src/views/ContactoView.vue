<template>

    <!-- Page Header Start -->
    <div class="container py-5 px-2 bg-primary">
        <div class="row py-5 px-4">
            <div class="col-sm-6 text-center text-md-left">
                <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Contactos</h1>
            </div>
            <div class="col-sm-6 text-center text-md-right">
                <div class="d-inline-flex pt-2">
                    <h4 class="m-0 text-white">
                        <!-- <a class="text-white" href="#">Inicio</a> -->
                        <RouterLink to="/" class="text-white">Inicio</RouterLink>
                    </h4>
                    <h4 class="m-0 text-white px-2">/</h4>
                    <h4 class="m-0 text-white">Contactos</h4>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- Contact Start -->
    <div class="container bg-white pt-5">
                <div class="row px-3 pb-2">
                    <div class="col-sm-4 text-center mb-3">
                        <i class="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                        <h4 class="font-weight-bold"><i class="fab fa-whatsapp"></i> Whatsapp</h4>
                        <p>www.AvO.net</p>
                    </div>
                    <div class="col-sm-4 text-center mb-3">
                        <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                        <h4 class="font-weight-bold">Teléfono</h4>
                        <p>+012 345 6789</p>
                    </div>
                    <div class="col-sm-4 text-center mb-3">
                        <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
                        <h4 class="font-weight-bold">Email</h4>
                        <p>avo@example.com</p>
                    </div>
                </div>
                <div class="col-md-12 pb-5">
                    <div class="contact-form">
                        <div v-show="enviado == true" class="alert alert-success">Mensaje enviado correctamente!</div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" v-model="nombre" class="form-control" id="name" placeholder="Ingresa tu nombre completo" required="required" data-validation-required-message="Please enter your name" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control" v-model="correo" id="email" placeholder="Ingresa tu correo" required="required" data-validation-required-message="Please enter your email" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" v-model="asunto" id="subject" placeholder="Asunto" required="required" data-validation-required-message="Please enter a subject" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" rows="8" v-model="mensaje" id="message" placeholder="Escribe tu mensaje" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button @click="enviarMensaje()" class="btn btn-primary" type="button" id="sendMessageButton">Enviar mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Contact End -->



</template>

<script>
    import axios from 'axios';
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const enviado = ref(false);
            const nombre = ref('');
            const correo = ref('');
            const asunto = ref('');
            const mensaje = ref ('');

            const baseUrl = "http://hamiloblog.test/api";



            const enviarMensaje = async ()=>{

                if(nombre.value == '' || correo.value == '' || asunto.value == '' || mensaje.value == '' ){
                    alert('Todos los campos son requeridos!');
                    return;
                }

                try {
                    const {data} = await axios.post(baseUrl + '/contactos',{
                        nombre : nombre.value,
                        correo : correo.value,
                        asunto : asunto.value,
                        mensaje : mensaje.value,
                    },{
                        header: {
                            "Content-Type": "application/json",
                            'Accept': "application/json",
                        },
                    });
                    console.log(data);
                    enviado.value = true;
                setTimeout(() => {
                    enviado.value = false;
                    nombre.value= '';
                    correo.value= '';
                    asunto.value= '';
                    mensaje.value= '';

                },1000);

                } catch (error) {
                    console.log(error)

                }
            }





            return {
                enviado,
                nombre,
                correo,
                asunto,
                mensaje,
                enviarMensaje

            }
        }
    }
</script>

<style scoped>

</style>
