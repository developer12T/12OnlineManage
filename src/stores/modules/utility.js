import { defineStore } from 'pinia'

export const useUtilityStore = defineStore('utility', {
  state: () => ({
    selectedCheckboxes: [],
    currentPage: [],
  }),
  actions: {
    updateSelectedCheckboxes(checkboxes) {
      this.selectedCheckboxes = checkboxes;
    },
    setPage(pageName) {
      this.currentPage = pageName;
      localStorage.setItem('orderPage', pageName);
    },
    getPage() {
      this.currentPage = localStorage.getItem('orderPage');
    },
  },
});
