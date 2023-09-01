import { appRoutes } from "@/router/appRoutes";

export const appNavigation = [
  {
    text: 'Решение для энергосбытовых компаний',
    link: appRoutes.solutionForPowerSupplyCompanies(),
    children: [
      {
        text: 'ПО cEnergo',
        link: appRoutes.powerSupplyCompaniesCEnergoSoftware(),
      },
      {
        text: 'ПО AdminTools',
        link: appRoutes.powerSupplyCompaniesAdminToolsSoftware(),
      },
      {
        text: 'Моб. приложение «Энергомера учёт»',
        link: appRoutes.powerSupplyCompaniesMobileApp(),
      },
    ]
  },
  {
    text: 'Решение для сетевых компаний',
    link: appRoutes.solutionForNetworkCompanies(),
    children: [
      {
        text: 'ПО cEnergo',
        link: appRoutes.networkCompaniesCEnergoSoftware(),
      },
      {
        text: 'Кибербезопасность',
        link: appRoutes.networkCompaniesCybersecurity(),
      },
      {
        text: 'Моб. приложение для инжиниринга',
        link: appRoutes.networkCompaniesMobileApp(),
      }
    ]
  },
  {
    text: 'Цифровизация электросетевого комплекса',
    link: appRoutes.digitalizationOfThePowerGridComplex(),
    children: [
      {
        text: 'Построение цифрового РЭС',
        link: appRoutes.powerGridComplexConstructionDigitalRES(),
      },
      {
        text: 'SCADA 2.0',
        link: appRoutes.powerGridComplexSCADA(),
      },
    ]
  },
  {
    children: [
      {
        text: 'Програмное обеспечение',
        link: appRoutes.software(),
        children: [
          {
            text: 'ПО cEnergo',
            link: appRoutes.softwareSupplyCompaniesCEnergoSoftware()
          },
          {
            text: 'Admin Tools',
            link: appRoutes.softwareAdminToolsSoftware()
          },
          {
            text: 'Приложение «Энергомера учёт»',
            link: appRoutes.softwareSupplyCompaniesMobileApp()
          },
          {
            text: 'Приложение для инжиниринга',
            link: appRoutes.softwareNetworkCompaniesMobileApp()
          },
          {
            text: 'SCADA 2.0',
            link: appRoutes.softwarePowerGridComplexSCADA()
          },
        ]
      },
      {
        text: 'Система обрыва фаз',
        link: appRoutes.phaseFailureSystem()
      },
      {
        text: 'Интеллектуальные системы учёта',
        link: appRoutes.intelligentAccountingSystems()
      },
      {
        text: 'О компании',
        link: appRoutes.about()
      }
    ]
  }
]