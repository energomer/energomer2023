import type { Component } from "vue"

import type { InfoCardProps } from "@/components/InfoCard/InfoCard.types"

export interface StepperWithTabsProps {
  items?: {
    tab: string,
    component: Component
    props?: InfoCardProps;
  }[]
  withPhoneImage?: boolean
}

export interface StepperWithTabsEmits {
  (event: 'onTabClick', data: string): void;
}