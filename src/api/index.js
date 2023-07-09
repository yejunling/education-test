import axios from 'axios';

// 获取菜单
export function getMenu() {
  return axios.get('./assets/json/menu.json');
}