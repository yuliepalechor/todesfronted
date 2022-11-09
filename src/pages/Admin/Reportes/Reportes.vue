<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Reportes</h4>
            <p class="category">Lista de Reportes</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="blue"></simple-table>
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
