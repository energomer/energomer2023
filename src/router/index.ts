import { createRouter, createWebHistory } from 'vue-router'

import { AboutView } from '@/views/AboutView'
import { HomeView } from '@/views/HomeView'
import { G3PLC, GSMGPRS3GNBIoT, IntelligentAccountingSystemsView, LoRS485, PLCRF } from '@/views/IntelligentAccountingSystems'
import { LoRaWAN } from '@/views/IntelligentAccountingSystems/LoRaWAN'
import { MenuView } from '@/views/MenuView'
import { DigitalizationOfThePowerGridComplex, NetworkCompaniesCybersecurity, NetworkCompaniesMobileApp, NetworkCompaniesView } from '@/views/NetworkCompaniesView'
import { PowerGridComplexSCADA } from '@/views/NetworkCompaniesView/DigitalizationOfThePowerGridComplex'
import { PowerSupplyCompaniesAdminToolsSoftware, PowerSupplyCompaniesCEnergoSoftware, PowerSupplyCompaniesMobileApp, PowerSupplyCompaniesProductLine, PowerSupplyCompaniesView } from '@/views/PowerSupplyCompaniesView'
import { SoftwareView } from '@/views/SoftwareView'

import { appRoutes } from './appRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: appRoutes.home(),
      component: HomeView,
      name: 'home',
    },
    {
      path: appRoutes.menu(),
      component: MenuView,
      name: 'menu',
    },
    {
      path: appRoutes.about(),
      component: AboutView,
    },
    {
      path: appRoutes.software(),
      component: SoftwareView,
      name: 'Программое обеспечение',
      children: [
        {
          path: appRoutes.softwareSupplyCompaniesCEnergoSoftware().split('/')[2],
          component: PowerSupplyCompaniesCEnergoSoftware
        },
        {
          path: appRoutes.softwareAdminToolsSoftware().split('/')[2],
          component: PowerSupplyCompaniesAdminToolsSoftware
        },
        {
          path: appRoutes.softwareSupplyCompaniesMobileApp().split('/')[2],
          component: PowerSupplyCompaniesMobileApp
        },  
        {
          path: appRoutes.softwareNetworkCompaniesMobileApp().split('/')[2],
          component: NetworkCompaniesMobileApp,
      
        },
        {
          path: appRoutes.powerGridComplexSCADA().split('/')[2],
          component: PowerGridComplexSCADA,
        },
      ]
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
          path: appRoutes.networkCompaniesCEnergoSoftware().split('/')[2],
          component: PowerSupplyCompaniesCEnergoSoftware,
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
          path: appRoutes.powerGridComplexConstructionDigitalRES().split('/')[2],
          component: PowerGridComplexSCADA,
        },
        {
          path: appRoutes.powerGridComplexPhaseFailureSystem().split('/')[2],
          component: PowerGridComplexSCADA,
        },
        {
          path: appRoutes.powerGridComplexSCADA().split('/')[2],
          component: PowerGridComplexSCADA,
        },
      ]
    },
    {
      path: appRoutes.intelligentAccountingSystems(),
      component: IntelligentAccountingSystemsView,
      children: [
        {
          path: appRoutes.intelligentAccountingSystemsG3PLC().split('/')[2],
          component: G3PLC,
        },
        {
          path: appRoutes.intelligentAccountingSystemsLoRaWAN().split('/')[2],
          component: LoRaWAN,
        },
        {
          path: appRoutes.intelligentAccountingSystemsLoRS485().split('/')[2],
          component: LoRS485,
        },
        {
          path: appRoutes.intelligentAccountingSystemsGSMGPRS3GNBIoT().split('/')[2],
          component: GSMGPRS3GNBIoT,
        },
        {
          path: appRoutes.intelligentAccountingSystemsPLCRF().split('/')[2],
          component: PLCRF,
        }
      ]
    },
  ]
})

export default router
