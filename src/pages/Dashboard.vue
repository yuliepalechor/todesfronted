<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card :chart-data="dailySalesChart.data" :chart-options="dailySalesChart.options" :chart-type="'Line'"
          data-background-color="blue">
          <template slot="content">
            <h4 class="title">Eventos por fecha</h4>
            <p class="category">
              <span class="text-success">
              </span>
              estadisticas de eventos
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              actualizado hace 4 minutes
              <md-button @click="showEventoxfecha = true" class="md-icon-button md-raised md-primary">
                <md-icon>menu</md-icon>
              </md-button>
            </div>

          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card :chart-data="emailsSubscriptionChart.data" :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions" :chart-type="'Bar'"
          data-background-color="purple">
          <template slot="content">
            <h4 class="title">Incidencias por fecha</h4>
            <p class="category">incidencias</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              actualizado hace 4 dias
              <md-button @click="showincidencia= true" class="md-icon-button md-raised md-primary">
                <md-icon>menu</md-icon>
              </md-button>
            </div>
          </template>
        </chart-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card :chart-data="dataCompletedTasksChart.data" :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'" data-background-color="blue">
          <template slot="content">
            <h4 class="title">Noticias por fecha</h4>
            <p class="category">total noticias</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              agregado hace 26 minutos
              <md-button @click="show1 = true" class="md-icon-button md-raised md-primary">
                <md-icon>menu</md-icon>
              </md-button>
            </div>
          </template>
        </chart-card>
      </div>



      <!-- primer modal  para eventos -->
      <b-modal v-model="showEventoxfecha" title="Listar por fecha " :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant" :body-bg-variant="bodyBgVariant" :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant">
        <b-container fluid>

          <!-- fechaeventos input inicio -->
          <div>
            <label for="example-input">Filtrar fecha</label>
            <b-input-group class="mb-3">
              <b-form-input id="fechaEvento" name="fechita" v-model="value" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></b-form-input>
              <b-input-group-append>
                <b-form-datepicker v-model="value" button-only right locale="en-US" aria-controls="example-input"
                  @context="onContext"></b-form-datepicker>
              </b-input-group-append>

            </b-input-group>
            
            <!-- <p class="mb-1">Value: '{{ value }}'</p>
            <p class="mb-1">Selected: '{{ selected }}'</p>
            <p>Formatted: '{{ formatted }}'</p> -->

           
          </div>
          <!-- fecha input final -->

          <b-button v-b-modal="" @click="geteventofecha(value)" variant="primary" size="sm"
            class="float-right">Listar
          </b-button>

        </b-container>

        <template #modal-footer>
          <div class="w-100">
            <p class="float-left"></p>
            <b-button variant="primary" size="sm" class="float-right" @click="showEventoxfecha = false">cerrar
            </b-button>
          </div>

          <!--       lista eventos por fecha     abre segundo modal       -->
          <div>
            <b-modal size="xl" id="asignacionnueva" title="eventos x fecha"  v-model="showTablaEventofecha">

              <b-container fluid>
                <div>
                  <b-table :filter="filter" id="tablaEventos" :per-page="perpage" :current-page="currentPage" striped
                    hover responsive class="mt-4" :fields="encabezado" :items="eventos">

                  </b-table>

                  <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perpage"
                    aria-controls="tablaEventos"></b-pagination>
                </div>
              </b-container>
              <template #modal-footer>
                <div class="w-100">

                </div>
              </template>

              <template>

              </template>
            </b-modal>

          </div>
          <!-- final modal de eventos por fecha lista -->

          <!--       lista de noticias x fecha segundo modal       -->
          

        </template>
      </b-modal>


      <!-- final primermodal para eventos-->







      <!-- primer modal  prueba -->
      <b-modal v-model="show1" title="Listar por fecha" :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant" :body-bg-variant="bodyBgVariant" :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant">
        <b-container fluid>

          <!-- fechaeventos input inicio -->
          <div>
            <label for="example-input">Filtrar fecha</label>
            <b-input-group class="mb-3">
              <b-form-input id="fechaEvento" name="fechita" v-model="value" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></b-form-input>
              <b-input-group-append>
                <b-form-datepicker v-model="value" button-only right locale="en-US" aria-controls="example-input"
                  @context="onContext"></b-form-datepicker>
              </b-input-group-append>

            </b-input-group>
            
            <!-- <p class="mb-1">Value: '{{ value }}'</p>
            <p class="mb-1">Selected: '{{ selected }}'</p>
            <p>Formatted: '{{ formatted }}'</p> -->

           
          </div>
          <!-- fecha input final -->

          <b-button v-b-modal="" @click="getnoticiafecha(value)" variant="primary" size="sm"
            class="float-right">Listar
          </b-button>

        </b-container>

        <template #modal-footer>
          <div class="w-100">
            <p class="float-left"></p>
            <b-button variant="primary" size="sm" class="float-right" @click="show1 = false">cerrar
            </b-button>
          </div>

          <!--       lista eventos por fecha     abre segundo modal       -->
          <div>
            <b-modal size="xl" id="asignacionnueva" title="noticias por fecha"  v-model="showTablaNoticiafecha">

              <b-container fluid>
                <div>
                  <b-table :filter="filter" id="tablaNoticia" :per-page="perpage" :current-page="currentPage" striped
                    hover responsive class="mt-4" :fields="encabezado" :items="noticias">

                  </b-table>

                  <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perpage"
                    aria-controls="tablaNoticia"></b-pagination>
                </div>
              </b-container>
              <template #modal-footer>
                <div class="w-100">

                </div>
              </template>

              <template>

              </template>
            </b-modal>

          </div>
          <!-- final modal de eventos por fecha lista -->

          <!--       lista de noticias x fecha segundo modal       -->
          

        </template>
      </b-modal>


      <!-- final primermodal prueba-->














 <!-- primer modal  prueba incidencias-->

        <b-modal v-model="showincidencia" title="Listar por fecha" :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant" :body-bg-variant="bodyBgVariant" :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant">
        <b-container fluid>

          <!-- fechaeventos input inicio -->
          <div>
            <label for="example-input">Filtrar fecha</label>
            <b-input-group class="mb-3">
              <b-form-input id="fechaEvento" name="fechita" v-model="value" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></b-form-input>
              <b-input-group-append>
                <b-form-datepicker v-model="value" button-only right locale="en-US" aria-controls="example-input"
                  @context="onContext"></b-form-datepicker>
              </b-input-group-append>

            </b-input-group>
            
            <!-- <p class="mb-1">Value: '{{ value }}'</p>
            <p class="mb-1">Selected: '{{ selected }}'</p>
            <p>Formatted: '{{ formatted }}'</p> -->
          </div>
          <!-- fecha input final -->



          <!-- incidencias lista -->
          <!-- <div>
                  <b-table :filter="filter" id:="tablaIncidencias" :per-page="perpage" :current-page="currentPage" striped
                hover responsive class="mt-4" :fields="encabezado2" :items="incidencias">

                <template v-slot:cell(Ver)="row">
                    <b-button v-b-modal.modal-scrollable @click="VerIncidencia(row.item.id)"
                        class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Ver</md-tooltip>
                    </b-button>
                </template>

            </b-table>
                </div> -->
          

          <b-button v-b-modal="" @click="getincidenciafecha(value)" variant="primary" size="sm"
            class="float-right">Listar
          </b-button>

        </b-container>

        <template #modal-footer>
          <div class="w-100">
            <p class="float-left"></p>
            <b-button variant="primary" size="sm" class="float-right" @click="showincidencia = false">cerrar
            </b-button>
          </div>

          <!--       lista eventos por fecha     abre segundo modal       -->
          <div>
            <b-modal size="xl" id="asignacionnueva" title="incidencias por fecha"  v-model="showTablaincidenciafecha">

              <b-container fluid>
                <div>
                  <b-table :filter="filter" id:="tablaIncidencias" :per-page="perpage" :current-page="currentPage" striped
                hover responsive class="mt-4" :fields="encabezado2" :items="incidencias">

                <template v-slot:cell(Ver)="row">
                    <b-button v-b-modal.modal-scrollable @click="VerIncidencia(row.item.id)"
                        class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Ver</md-tooltip>
                    </b-button>
                </template>

            </b-table>
                </div>
              </b-container>
              <template #modal-footer>
                <div class="w-100">

                </div>
              </template>

              <template>

              </template>
            </b-modal>

          </div>
          <!-- final modal de eventos por fecha lista -->

          <!--       lista de noticias x fecha segundo modal       -->
          

        </template>
      </b-modal>


      <!-- final primermodal prueba  incidencias-->















      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>

          <!-- <md-card-header data-background-color="orange">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </md-card-header> -->
          <!-- <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content> -->
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <!-- <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,



} from "@/components";
import { async } from "q";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get, child, set, update, remove, equalTo, push } from "firebase/database";


//configurar conexion proyecto con firebase
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
  components: {
    StatsCard,
    ChartCard,
  },
  data() {
    return {
      showEventoxfecha: false,
      showTablaEventofecha: false,
    
      showTablaNoticiafecha:false,
      showTablaincidenciafecha:false,


      showincidencia:false,
      show1: false,
      publicacion: [],
      incidencias: [],
      
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'info',
      footerTextVariant: 'dark',

      datepicker:"",
      value: '',
      formatted: '',
      selected: '',

      dailySalesChart: {
        data: {
          labels: ["ene", "feb", "mar", "abr", "may", "jun", "jul"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },

      },
      dataCompletedTasksChart: {
        data: {
          labels: ["ene", "feb", "mar", "abr", "may", "jun", "jul"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      encabezado: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripcion" },
        { key: "lugar", label: "Lugar" },
        { key: "estado", label: "Estado" },
        { key: "responsable", label: "Responsable" },
        { key: "fecha_y_Hora", label: "fecha-hora" },
        { key: "fecha_caducidad", label: "fecha-caducidad" },
        { key: "tipo", label: "Tipo" },
      ],
      encabezado2: [
                //{ key: "id", label: "id" },
                { key: "estado", label: "Estado" },
                { key: "date", label: "Fecha" },
                { key: "descripcion", label: "Descripcion" },
                { key: "barrio", label: "Barrio" },

                { key: "Ver", label: "Ver" }
            ],

    };
  },

  methods: {
    // trae noticias por fecha button
    geteventofecha(fecha) {
      this.axios
        .get("http://127.0.0.1:8000/api/eventosfecha/"+fecha)
        .then((response) => {
          this.eventos = response.data;
          console.log(this.eventos);
          this.showTablaEventofecha=true;
        });
        
    },

    getnoticiafecha(fecha) {
      this.axios
        .get("http://127.0.0.1:8000/api/noticiasfecha/"+fecha)
        .then((response) => {
          this.noticias = response.data;
          console.log(this.noticias);
          this.showTablaNoticiafecha=true;
        });
        
    },
    getincidenciafecha(fecha) {

      const dbIncidenciasRef2 = ref(database, 'Incidencias/')
            onValue(dbIncidenciasRef2, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();

                    console.log(childData)
                    if (fecha == childSnapshot.val().date) {
                        this.incidencias.push({
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
            this.showTablaincidenciafecha=true;
        
    },

    //datepicker
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
    }

  },
  mounted() {
    //this.getevento();
    //this.getnoticia();
    //this.geteventofecha(fecha);

  },

  computed: {
    rows() {
     
    },
  },

  // action:{
  //   eventosporfecha(){
  //     this.axios.get("http://127.0.0.1:8000/api/eventos")
  //     .then((response)=>{
  //     const eventosxfecha=[]
  //     for (let i=0;i<response.data.results.length;i++){
  //           eventosxfecha.push({
  //             indicador:(i+1),
  //             nombre_publicacion: response.data.results[i]

  //           })
  //     }
  //     })
  //   }

  // }
};

</script>