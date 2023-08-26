import { appRoutes } from "@/router/appRoutes";

export const appNavigation = [
  {
    text: 'Решение для энергосбытовых компаний',
    link: appRoutes.solutionForPowerSupplyCompanies(),
    children: [
      {
        text: 'Линейка продукции',
        link: appRoutes.powerSupplyCompaniesProductLine(),
      },
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
        text: 'Линейка продукции',
        link: appRoutes.networkCompaniesProductLine(),
      },
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
        text: 'Линейка продукции',
        link: appRoutes.powerGridComplexProductLine()
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
        text: 'Система обрыва фаз',
        link: appRoutes.phaseFailureSystem()
      },
      {
        text: 'Програмное обеспечение',
        link: appRoutes.software(),
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