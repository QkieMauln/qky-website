<template>
  <div class="text-center">
    <h1 class="title">Qky's Family</h1>
    <label>
      <input type="checkbox" v-model="customCard" />
      Custom cards
    </label>
  </div>
  <VueFamilyTree :tree="tree" @card-click="cardClick">
    <template v-slot:card="{ item }">
      <div class="family-card">
        <div :style="{ backgroundImage: item.image ? `url(${item.image})` : null }" class="family-card__image" />
        <div class="family-card__info">
          <div class="family-card__name" v-markdown="item.name"></div>
          <div v-show="item.species" class="family-card__detail">( {{ item.species }} )</div>
          <div v-show="'item.gender'" class="family-card__detail">Gender : {{ gender[item.gender] }}</div>
        </div>
      </div>
    </template>
  </VueFamilyTree>
</template>

<script>
  import VueFamilyTree from "@/components/assets/FamilyTree.vue";
  export default {
    components: {
      VueFamilyTree
    },
    data() {
      return {
        gender: ["Male", "Female", "Unknown"],
        tree: [
          {
            firstPerson: { name: "Heyzum", species: "Human", gender: 0 },
            secondPerson: { name: "Yuchan", species: "Human", gender: 1 },
            children: [
              {
                firstPerson: {
                  name: "Leonardo",
                  species: "Slime",
                  gender: 0
                }
              },
              {
                firstPerson: {
                  name: "Qky",
                  species: "Cat-Dog Hybrid",
                  gender: 2
                },
                secondPerson: {
                  name: "Collie",
                  species: "Husky-Cat Hybrid",
                  gender: 1
                },
                children: [
                  {
                    firstPerson: {
                      name: "Wulvie",
                      species: "Cat-Wolf Hybrid",
                      gender: 0
                    }
                  },
                  {
                    firstPerson: {
                      name: "Rexy",
                      species: "Human",
                      gender: 1
                    }
                  },
                  {
                    firstPerson: {
                      name: "Ichsan",
                      species: "Fox-Dog Hybrid",
                      gender: 0
                    },
                    secondPerson: {
                      name: "Neoki",
                      species: "Wolf",
                      gender: 0
                    }
                  },
                  {
                    firstPerson: {
                      name: "Michael",
                      species: "Wolf",
                      gender: 0
                    },
                    secondPerson: {
                      name: "Seki",
                      species: "??",
                      gender: 0
                    }
                  }
                ]
              }
            ]
          }
        ]
      };
    },
    methods: {
      cardClick(item) {
        console.log(item);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .text-center {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 32px;
  }

  .family-card {
    display: flex;
    align-items: center;
    width: 240px;
    padding: 16px;
    border: var(--border-template);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    background-color: var(--bg-main-light);
    cursor: pointer;
    box-shadow: 0 0 6px 2px transparent;
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 0 6px 2px var(--shadow-color);
    }
    &__image {
      flex: 0 0 auto;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: var(--bg-main);
      background-size: cover;
      background-position: 50%;
    }
    &__info {
      padding-left: 16px;
    }
    &__name {
      font-weight: 600;
      font-size: 1.1em;
    }
    &__detail {
      margin-top: 4px;
      font-size: 12px;
      word-break: keep-all;
      // white-space: nowrap;
    }
  }
</style>
