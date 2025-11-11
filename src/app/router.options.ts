import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: async (to: { hash: any; path: any }, from: any, savedPosition: any) => {
    if (to.hash) {
      if (from.path !== to.path) {
        window.scrollTo({ left: 0, top: 0 });
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve({
                el: to.hash,
                top: 60,
                behavior: 'smooth',
              }),
            500
          );
        });
      } else {
        return {
          el: to.hash,
          top: 60,
          behavior: 'smooth',
        };
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
};