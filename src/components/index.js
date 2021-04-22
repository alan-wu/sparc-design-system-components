import Vue from 'vue';
import ElementUI from 'element-ui';
import SvgIcon from 'vue-svgicon'

import '@/assets/styles.scss';

import BreadcrumbTrail from './BreadcrumbTrail'
import ContentOverviewCard from './ContentOverviewCard'
import Header from './Header'
import TabNav from './TabNav'

import '@/assets/icons'

const Components = {
  BreadcrumbTrail,
  ContentOverviewCard,
  Header,
  TabNav
}

Object.keys(Components).forEach(component => {
  Vue.component(component, Components[component]);
})

ElementUI.install(Vue)

Vue.use(SvgIcon, {
  defaultWidth: '1rem',
  defaultHeight: '1rem'
})

export default {
  ElementUI,
  ...Components
}
