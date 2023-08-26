import { createRouter, createWebHistory } from 'vue-router'

import { HomeView } from '@/views/HomeView'
import { PowerSupplyCompaniesAdminToolsSoftware, PowerSupplyCompaniesCEnergoSoftware, PowerSupplyCompaniesMobileApp, PowerSupplyCompaniesProductLine, PowerSupplyCompaniesView } from '@/views/PowerSupplyCompaniesView'

import { appRoutes } from './appRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: appRoutes.home(),
      component: HomeView
    },
    {
      path: appRoutes.solutionForPowerSupplyCompanies(),
      component: PowerSupplyCompaniesView,
      children: [
        {
          path: appRoutes.powerSupplyCompaniesAdminToolsSoftware().split('/')[2],
          component: PowerSupplyCompaniesAdminToolsSoftware
        },
        {
          path: appRoutes.powerSupplyCompaniesCEnergoSoftware().split('/')[2],
          component: PowerSupplyCompaniesCEnergoSoftware
        },
        {
          path: appRoutes.powerSupplyCompaniesMobileApp().split('/')[2],
          component: PowerSupplyCompaniesMobileApp
        },
        {
          path: appRoutes.powerSupplyCompaniesProductLine().split('/')[2],
          component: PowerSupplyCompaniesProductLine
        },
      ]
    },
  ]
})

export default router
