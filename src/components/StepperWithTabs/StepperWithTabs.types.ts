import type { Component } from "vue"

import type { InfoCardProps } from "@/components/InfoCard/InfoCard.types"

export interface StepperWithTabsProps {
  items?: {
    tab: string,
    component: Component
    props?: InfoCardProps;
  }[]
}