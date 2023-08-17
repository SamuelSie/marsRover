import { defineStore } from 'pinia'

export const useSolStore = defineStore('sol', {
  state: () => ({
    sol: "",
  }),
  actions: {
    updateSol(s) {
      this.sol = s
    }
  }
}

 
)
