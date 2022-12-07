<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Descripcion</th>
                        <th>Edad</th>
                        <th>Hora</th>
                        <th>Nombres</th>
                        <th>Ubicacion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="incidencia in incidencias" :key="incidencia.key">
                        <td>{{ incidencia.date }}</td>
                        <td>{{ incidencia.descripcion }}</td>
                        <td>{{ incidencia.edad }}</td>
                        <td>{{ incidencia.hora }}</td>
                        <td>{{ incidencia.nombres_apellidos }}</td>
                        <td>{{ incidencia.ubicacion }}</td>
                        <td>


                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script >
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";

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



export default {
    data() {
        return {
            incidencias: []
        }
    },
    created() {
        const starCountRef = ref(database, 'Incidencias/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            Object.keys(snapshot.val()).forEach((key) => {
                this.incidencias.push({
                    date: snapshot.val()[key].date,
                    descripcion: snapshot.val()[key].descripcion,
                    edad: snapshot.val()[key].edad,
                    hora: snapshot.val()[key].hora,
                    nombres_apellidos: snapshot.val()[key].hora,
                    ubicacion: snapshot.val()[key].ubicacion,
                })
            });
        });
        console.log(starCountRef)

    },
    methods: {

    }
}
</script>
<style>
.btn-primary {
    margin-right: 12px;
}
</style>