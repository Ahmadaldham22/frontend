<template>
  <div>
    <v-row v-if="!deckEdit">
      <v-col cols="6" v-for="pkg in project.decks" :key="pkg.id">
        <v-card outlined class="projectDeck">
          <v-card-title>
            <v-row>
              <v-col cols="9">
                {{ pkg.title }}
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn
                  outlined
                  width="50"
                  :ripple="false"
                  @click="setDeckEdit(pkg)"
                >
                  <v-icon size="24">
                    $vuetify.icons.edit
                  </v-icon>
                </v-btn>
              </v-col>
              <v-divider></v-divider>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-divider class="mb-2"></v-divider>
            <v-col cols="12">
              <v-icon>$vuetify.icons.deployments</v-icon>
              {{ $tc('deployment.Deployment', pkg.deployments.length) }}
            </v-col>
            <v-col cols="12" class="d-flex flex-wrap">
              <span
                v-for="deployment in pkg.deployments"
                :key="deployment.id"
                class="deployment-badge mr-3 px-4 py-2"
              >
                {{ deployment.title }}
              </span>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <edit-deck
        v-for="environment in deckToBeEdited.environment"
        v-bind:key="environment.id"
        :deck="deckToBeEdited"
        :environment="environment"
        :sopsProviders="project.sops"
        @change="deckEdit = false; $emit('update')"
      ></edit-deck>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  TDeckNode,
  TProjectNode,
} from '@/generated/graphql';
import EditDeck from '@/components/Projects/EditDeck.vue';

@Component({
  components: {
    EditDeck,
  },
})
export default class ProjectDecks extends Vue {
  @Prop() readonly project!: TProjectNode;

  deckEdit = false;

  deckToBeEdited: TDeckNode | undefined;

  memberDrawer = false;

  setEdit(): void {
    this.$router.push({ query: { edit: 'true' } });
  }

  setDeckEdit(pkg: TDeckNode): void {
    this.deckToBeEdited = pkg;
    this.deckEdit = true;
  }
}
</script>

<style lang="scss" scoped>
.deployment-badge {
  font-weight: 500;
  background-color: #f3f4f9;
  color: #9eaed7;
  white-space: nowrap;
  flex: 0 0 auto;
  margin-bottom: 10px;
}

th:first-child {
  border-top-left-radius: 6px;
}

th:last-child {
  border-top-right-radius: 6px;
}

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: white;
}
</style>
