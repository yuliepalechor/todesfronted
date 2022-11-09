<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="azul">
            <h4 class="title">Eventos</h4>
            <p class="category">Lista de Eventos</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="azul"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      
    </div>
  </div>
</template>

<script>
import { SimpleTable,  } from "@/components";

export default {
  components: {
    
    SimpleTable,
  },
};
</script>
