

export interface UserTab {
  id: number,
  name: string,
  icon: string,
  type: string
}

export const userTabType = {
  ORDERS: 'orders',
  DESIRE: 'desire',
  SALES: 'sales',
  SETTINGS: 'settings'
}