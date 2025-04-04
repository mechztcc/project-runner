import { defineStore } from 'pinia'

export const useFoldersStore = defineStore('project', {
  state: () => ({
    projects: [] as string[],
    mainFolderPath: '' as string,
    selectedProject: '',
  }),
  actions: {
    setProjects(projects: string[]) {
      this.projects = projects
    }
  },
})