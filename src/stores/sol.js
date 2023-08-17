import { defineStore } from 'pinia'

export const useSolStore = defineStore('sol', {
  state: () => ({
    sol: "",
    camera: "",
  }),
  actions: {
    updateSol(sol) {
      this.sol = sol
    }
  }
}

 
)
