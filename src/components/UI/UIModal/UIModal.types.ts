export interface UIModalProps {
  isOpen?: boolean;
}

export interface UIModalEmits {
  (event: 'onClose'): void;
}