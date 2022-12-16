<template class="body">
    <!---->

    <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">NUEVAS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ACEPTADAS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">DESCARTADAS</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div>
            <b-form-input v-model="filter" type="search" placeholder="Buscar...">

            </b-form-input>
            <b-table :filter="filter" id:="tablaIncidencias" :per-page="perpage" :current-page="currentPage" striped
                hover responsive class="mt-4" :fields="encabezado" :items="incidencias">

                <template v-slot:cell(Ver)="row">
                    <b-button v-b-modal.modal-scrollable @click="VerIncidencia(row.item.id)"
                        class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Ver</md-tooltip>
                    </b-button>
                </template>

            </b-table>
        </div>

        <div>

            <b-modal id="modal-scrollable" scrollable title="INFORMACION INDECIDENCIA">
                <div>
                    <b-card no-body style="max-width: 20rem;" img-src="" img-alt="Image" img-top>
                        
                        <img :src="this.picture"/>
                        <b-card-body>
                            <b-card-title>{{ incidenciaM.date }}</b-card-title>
                            <b-card-sub-title class="mb-2">{{ incidenciaM.hora }}</b-card-sub-title>
                            <b-card-text>
                                {{ incidenciaM.descripcion }}
                            </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                            <b-list-group-item>{{ incidenciaM.ubicacion }}</b-list-group-item>
                            <b-list-group-item>{{ incidenciaM.barrio }}</b-list-group-item>
                            <b-list-group-item>{{ incidenciaM.nombres }}</b-list-group-item>
                        </b-list-group>

                        <b-card-body>
                            <b-button variant="success" @click="aceptarIncidencia(codIncidencia)">ACEPTAR</b-button>

                            <b-button variant="danger" @click="descartarIncidencia(codIncidencia)">DESCARTAR</b-button>

                        </b-card-body>
                    </b-card>
                </div>
            </b-modal>

        </div>

    </div>



</template>
<script type="module">

import Swal from "sweetalert2"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get, child, set, update, remove, equalTo, push } from "firebase/database";




const firebaseConfig = {
    apiKey: "AIzaSyDeULle7wFJIoWjafOyoGEG3u4_P2e9zEU",
    authDomain: "androidtodes.firebaseapp.com",
    databaseURL: "https://androidtodes-default-rtdb.firebaseio.com",
    projectId: "androidtodes",
    storageBucket: "androidtodes.appspot.com",
    messagingSenderId: "390356232637",
    appId: "1:390356232637:web:8d1bee1df43c2378bdcad4",
    measurementId: "G-V8Y63159Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

//const recentPostsRef = ref(database, 'Incidencias/' + orderByChild("estado") + equalTo("no revisado"));
//console.log(recentPostsRef)
//starCountRef -> Apunta a la ref tabla db
//orderByChild("estado")
//equalTo("no revisado")
/*const dbIncidenciasRef = ref(database, 'Incidencias/')
onValue(dbIncidenciasRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        console.log(childKey)

        // ...
    });
}, {
    onlyOnce: true
});
console.log(dbIncidenciasRef);*/

//const refstorage = storage.ref();


export default {
    data() {
        return {
            incidencias: [],
            incidenciaM: [],
            codIncidencia: 0,
            picture:0,
            filter: null,
            perpage: 10,
            currentPage: 1,
            showIncidencia: false,

            encabezado: [
                //{ key: "id", label: "id" },
                { key: "estado", label: "Estado" },
                { key: "date", label: "Fecha" },
                { key: "descripcion", label: "Descripcion" },
                { key: "barrio", label: "Barrio" },

                { key: "Ver", label: "Ver" }
            ],

            variant: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
            headerBgVariant: '#9c27b0',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'warning',
            footerTextVariant: 'dark',
        }
    },
    created() {

        /*const starCountRef = ref(database, 'Incidencias/');   //starCountRef -> Apunta a la ref tabla db
        //starCountRef.orderByChild("estado").equalTo("no revisado");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            Object.keys(snapshot.val()).forEach((key) => {
                var name = (snapshot.getkey);
                 console.log(name),
                     this.incidencias.push({
                         id: snapshot.getkey,
                         estado: snapshot.val()[key].estado,
                         date: snapshot.val()[key].date,
                         barrio: snapshot.val()[key].barrio,
                         descripcion: snapshot.val()[key].descripcion,
                         edad: snapshot.val()[key].edad,
                         hora: snapshot.val()[key].hora,
                         nombres_apellidos: snapshot.val()[key].hora,
                         ubicacion: snapshot.val()[key].ubicacion,
                         
                     })
             });
        });
        console.log(starCountRef)*/

        const dbIncidenciasRef = ref(database, 'Incidencias/')
        onValue(dbIncidenciasRef, (snapshot) => {

            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                this.incidencias.push({
                    id: childKey,
                    estado: childSnapshot.val().estado,
                    date: childSnapshot.val().date,
                    descripcion: childSnapshot.val().descripcion,
                    barrio: childSnapshot.val().barrio,

                })
            });
        }, {
            onlyOnce: true
        });

    },

    methods: {
        VerIncidencia(idIncidencia) {
            const dbIncidenciasRef2 = ref(database, 'Incidencias/')
            onValue(dbIncidenciasRef2, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();

                    console.log(childData)
                    if (idIncidencia == childKey) {
                        this.codIncidencia = childKey;
                        this.incidenciaM = childData;
                        this.picture = childSnapshot.val().urlimagen;
                        console.log(this.picture);
                        this.incidenciaM.push({
                            id: childKey,

                            IdUsuario: childSnapshot.val().IdUsuario,
                            barrio: childSnapshot.val().barrio,
                            date: childSnapshot.val().date,
                            descripcion: childSnapshot.val().descripcion,
                            edad: childSnapshot.val().edad,
                            estado: childSnapshot.val().estado,
                            hora: childSnapshot.val().hora,
                            nombres: childSnapshot.val().nombres,
                            ubicacion: childSnapshot.val().ubicacion,
                            urlimagen: childSnapshot.val().urlimagen,
                        })

                    }

                });
            }, {
                onlyOnce: true
            });
        },

        aceptarIncidencia(idincu) {
            set(ref(database, 'Incidencias/' + idincu), {
                IdUsuario: this.incidenciaM.IdUsuario,
                barrio: this.incidenciaM.barrio,
                date: this.incidenciaM.date,
                descripcion: this.incidenciaM.descripcion,
                edad: this.incidenciaM.edad,
                estado: "Aceptada",
                hora: this.incidenciaM.hora,
                nombres: this.incidenciaM.nombres,
                ubicacion: this.incidenciaM.ubicacion,
                urlimagen: this.incidenciaM.urlimagen,
            })
                .then(() => {
                    // Data saved successfully!
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Incidencia Aceptada",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((error) => {
                    // The write failed...
                });


        },

        descartarIncidencia(idincu) {
            set(ref(database, 'Incidencias/' + idincu), {
                IdUsuario: this.incidenciaM.IdUsuario,
                barrio: this.incidenciaM.barrio,
                date: this.incidenciaM.date,
                descripcion: this.incidenciaM.descripcion,
                edad: this.incidenciaM.edad,
                estado: "Descartada",
                hora: this.incidenciaM.hora,
                nombres: this.incidenciaM.nombres,
                ubicacion: this.incidenciaM.ubicacion,
                urlimagen: this.incidenciaM.urlimagen,
            })
                .then(() => {
                    // Data saved successfully!
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Incidencia No Aceptada",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((error) => {
                    // The write failed...
                });
        },

        cargarImagen() {
            // const imagesRef = ref(this.storage,"Incidn")
        },

        mostrarmodal() {

            this.showIncidencia = true
        },

    },
    computed: {
        rows() {
            return this.incidencias.length

        }
    },

}
</script>
<style>
.navbarmio {
    background-color: #00ADB5;
}


</style>
