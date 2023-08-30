import { createRouter, createWebHistory } from 'vue-router'

import { HomeView } from '@/views/HomeView'
import { DigitalizationOfThePowerGridComplex, NetworkCompaniesCybersecurity, NetworkCompaniesMobileApp, NetworkCompaniesView } from '@/views/NetworkCompaniesView'
import { PowerGridComplexSCADA } from '@/views/NetworkCompaniesView/DigitalizationOfThePowerGridComplex'
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
    {
      path: appRoutes.solutionForNetworkCompanies(),
      component: NetworkCompaniesView,
      children: [
        {
          path: appRoutes.networkCompaniesCybersecurity().split('/')[2],
          component: NetworkCompaniesCybersecurity,
        },
        {
          path: appRoutes.networkCompaniesMobileApp().split('/')[2],
          component: NetworkCompaniesMobileApp,
        }
      ]
    },
    {
      path: appRoutes.digitalizationOfThePowerGridComplex(),
      component: DigitalizationOfThePowerGridComplex,
      children: [
        {
          path: appRoutes.powerGridComplexSCADA().split('/')[2],
          component: PowerGridComplexSCADA,
        },
      ]
    }
  ]
})

export default router
