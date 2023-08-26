import type { Component } from "vue";

export interface InfoCardProps {
  title?: string[];
  description?: string[];
  descriptionList?: string[];
  characteristics?: string[];
  benefits?: {
    text: string;
    icon: Component;
  }[]
}