import { config } from '../reusable/configs/config';

if (!sessionStorage.getItem(config.key.lan))
  sessionStorage.setItem('language', config.langs[navigator.language]);

if (!sessionStorage.getItem(config.key.sideBarShow))
  sessionStorage.setItem('sidebarShow', JSON.stringify('responsive'));

export const initialState = {
  sidebarShow: sessionStorage.getItem(config.key.sideBarShow) !== 'responsive' ? JSON.parse(sessionStorage.getItem(config.key.sideBarShow)) : sessionStorage.getItem(config.key.sideBarShow),
  language: sessionStorage.getItem('language'),
  createData: {},
  updateData: {},
  data: {}
}