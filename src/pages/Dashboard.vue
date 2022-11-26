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
            <h4 class="title">Eventos</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div id ="app">
              <transition name="fade">
                <div class="modal-overlay" v-if="showModal"></div>

  </transition>
  <transition name="fade">
    <div class="modal1" v-if="showModal">
    <h1>PRIMERO</h1>
    <p>Y si hacemos un muñeco </p>
    <button @click="showModal = false">Cerrar el Modal </button>
    </div>
  </transition>

  <button @click="showModal = true">Abrir el modal </button>

              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
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
            <h4 class="title">Noticias</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div id ="app">
              <transition name="fade">
                <div class="modal-overlay" v-if="showModal"></div>

  </transition>
  <transition name="fade">
    <div class="modal1" v-if="showModal">
    <h1>SEGUNDO</h1>
    <p>Ven vamos a jugar</p>
    <button @click="showModal = false">Cerrar el Modal </button>
    </div>
  </transition>

  <button @click="showModal = true">Abrir el modal </button>

              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
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
            <h4 class="title">Incidencias</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div id ="app">
              <transition name="fade">
                <div class="modal-overlay" v-if="showModal"></div>

  </transition>
  <transition name="fade">
    <div class="modal1" v-if="showModal">
    <h1>TERCERO</h1>
    <section class="container">
      
      <input type="date">
    </section>
    <button @click="showModal = false">Cerrar el Modal </button>
    </div>
  </transition>

  <button @click="showModal = true">Abrir el modal </button>

              <md-icon>access_time</md-icon>
              updated 10 minutes ago
            </div>
          </template>
        </chart-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="purple"
        >
          <template slot="content">
            <h4 class="title">Eventos</h4>
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
              updated 5 minutes ago
            </div>
          </template>
        </chart-card>
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
  name : 'App',
  components: {
    StatsCard,
    ChartCard,
   
    
   
  },
  data() {
    return {
      showModal : false,
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
    };
  },
};
</script>
<style>
* {
  margin:0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;

}
#app {
  width: 100%;
  height: 100%;
  overflow:hidden;
}
button{
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 15px;
  position: relative;
  left: 70%;
  top: 70%;


  display: block;
  
  padding: 5px 10px;
  background-image: linear-gradient(to right rgb(36, 122, 115),rgb(15, 201, 191));
  color: black;
  font-size: 11px;
  font-weight: bold;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);

}
button:hover{
  box-shadow: 6px 6px rgba(0, 0, 0, 0.8);
  
}

.modal1{
  height: 50%;
  width: 30%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background:grey;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  z-index:101

}
.input{
   width: 10px;
}

fade-enter {

}

</style>