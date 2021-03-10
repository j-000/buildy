import VueRouter from 'vue-router';
import Home from './pages/Home'
import SideBar_1 from './pages/SideBar_1'
import SideBar_2 from './pages/SideBar_2'
import SideBar_3 from './pages/SideBar_3'
import SideBar_4 from './pages/SideBar_4'


const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'page_1',
        component: SideBar_1
      },
      {
        path: 'sn_2',
        name: 'page_2',
        component: SideBar_2
      },
      {
        path: 'sn_3',
        name: 'page_3',
        component: SideBar_3
      },
      {
        path: 'sn_4',
        name: 'page_4',
        component: SideBar_4
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]


export default new VueRouter({
  mode: 'history',
  routes
})
