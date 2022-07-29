import { defineAsyncComponent  } from 'vue';

import {createRouter, createWebHistory} from 'vue-router';

//import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
//import CoachRegistation from './pages/coaches/CoachRegistation.vue';
//import ContactCoach from './pages/request/ContactCoach.vue';
//import RequestsReceived from './pages/request/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
//import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const CoachDetails = defineAsyncComponent(()=>
    import('./pages/coaches/CoachDetails.vue')
);
const CoachRegistation = defineAsyncComponent(() =>
    import('./pages/coaches/CoachRegistation.vue')
);
const ContactCoach = defineAsyncComponent(() =>
    import('./pages/request/ContactCoach.vue')
);
const RequestsReceived = defineAsyncComponent(() =>
    import('./pages/request/RequestsReceived.vue')
);
const UserAuth = defineAsyncComponent(() =>
    import('./pages/auth/UserAuth.vue')
);


const router= createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetails,
            props: true,
            children: [
                {path: 'contact', component: ContactCoach } // /coach/c1/contact
            ]
        },
        {path: '/register', component: CoachRegistation, meta: { requiresAuth:true} },
        {path: '/requests', component: RequestsReceived, meta: { requiresAuth:true} },
        {path: '/auth', component: UserAuth, meta: { requiresUnauth:true} },
        {path: '/:notFound(.*)', component: NotFound},
    ],
});

router.beforeEach(function(to,_,next){
if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
}else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
} else {
    next();
}
});

export default router;