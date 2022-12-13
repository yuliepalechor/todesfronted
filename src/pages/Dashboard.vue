<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Eventos por fecha</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
              <md-button @click="show=true" class="md-icon-button md-raised md-primary">
        <md-icon>menu</md-icon>
      </md-button>
            </div>
            
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="purple"
        >
          <template slot="content">
            <h4 class="title">Incidencias por fecha</h4>
            <p class="category">Last Campaign Performance</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 10 days ago
              <md-button @click="show=true" class="md-icon-button md-raised md-primary">
        <md-icon>menu</md-icon>
      </md-button>
            </div>
          </template>
        </chart-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Noticias por fecha</h4>
            <p class="category">Last Campaign Performance</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              campaign sent 26 minutes ago
              <md-button @click="show=true" class="md-icon-button md-raised md-primary">
        <md-icon>menu</md-icon>
      </md-button>
            </div>
          </template>
        </chart-card>
      </div>

      <!-- primer modal -->
        <b-modal
      v-model="show"
      title="listado por fecha"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
          <input type="date">

          <b-button
               v-b-modal="'asignacionnueva'"
               @click="getevento(eventosasig.id)" 
                variant="primary"
                size="sm"
                class="float-right"
              >listar
              </b-button>
              
          
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Reporte</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>

         <!--       lista de eventos segundo modal       -->
            <div>
              <b-modal size="xl" id="asignacionnueva" title="eventos">
                
            <b-container fluid>
              <input type="date">

            
                  <div>
                    <input type="button" class="btn btn-outline-info btn-sm" @click='eventoxfecha()' value="Search">
                    <button id="reset" class="btn btn-outline btn-sm">reset</button>
             
              <b-table  :filter="filter" id="tablaEventos" :per-page="perpage" :current-page="currentPage" striped  hover responsive  class="mt-4" :fields="encabezado" :items="eventos">
                
                <template v-slot:cell(ejemplo)="row">
                    <b-button v-b-modal="'asignacion'" @click="listaasignacion(row.item.id)" variant="primary">Ver</b-button>
               
               
                    
                  </template>
               </b-table> 

               <b-pagination
                  v-model="currentPage"
               :total-rows="rows"
                :per-page="perpage"
                aria-controls="tablaEventos"
               ></b-pagination>
           </div>
          </b-container>
              <template #modal-footer>
            <div class="w-100">
             
            </div>
          </template>

          <template>
  
    </template>
        </b-modal>
<!-- final modal dentro de modal -->
        </div>
        
      </template>
    </b-modal>


      <!-- final primermodal -->


   
      <!-- <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Revenue</p>
            <h3 class="title">$34,245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div> -->
      <!-- <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">Used Space</p>
            <h3 class="title">
              49/50
              <small>GB</small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Get More Space...</a>
            </div>
          </template>
        </stats-card>
      </div> -->
      <!-- <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Fixed Issues</p>
            <h3 class="title">75</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Tracked from Github
            </div>
          </template>
        </stats-card>
      </div> -->
      <!-- <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Folowers</p>
            <h3 class="title">+245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div> -->
       <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
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
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
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

export default {
  components: {
    StatsCard,
    ChartCard,
   
    
   
  },
  data() {
    return {
       show: false,
       publicacion: [],
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'info',
        footerTextVariant: 'dark',

      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
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
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
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
        { key: "nombre_publicacion", label: "Nombre" },
        { key: "descripcion_publicacion", label: "Descripcion" },
        { key: "lugar", label: "Lugar" },
        { key: "estado", label: "Estado" },
        { key: "responsable", label: "Responsable" },
        { key: "fecha", label: "fecha-hora" },
        { key: "fecha_caducidad", label: "fecha-caducidad" },
        { key: "tipo", label: "Tipo" },
      ],
    };
  },

   methods: {
    getevento() {
      this.axios
        .get("http://127.0.0.1:8000/api/eventos")
        .then((response) => {
          this.eventos = response.data;
        });
    },

    eventoxfecha:function(){
      alert('search');
    }

   },
    mounted() {
    this.getevento();
    
  },

  computed: {
    rows() {
      return this.eventos.length;
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