<template>
  <div id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme" style="margin-top: 15px">
    <div class="app-brand demo">
      <NuxtLink to="/" class="app-brand-link">
        <span class="app-brand-text demo menu-text fw-semibold ms-2">Materio</span>
      </NuxtLink>

      <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
        <!-- <i class="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i> -->
        <img src="/assets/img/layouts/navIcon.svg" style="height: 20px;" />
      </a>
    </div>

    <div class="menu-inner-shadow"></div>
    <!-- Navbar links Start -->
    <ul class="menu-inner py-1">
      <li class="menu-header fw-medium mt-4">
        <span class="menu-header-text">Admin Panel</span>
      </li>
      <!-- Link lists -->
      <li v-for="item in menuItems" class="menu-item"
        :class="{ active: isSameUrl(item.link) && item.childs.length === 0 }">
        <NuxtLink :to="item.link" class="menu-link" :class="{ 'menu-toggle': item.childs.length > 0 }">
          <i :class="item.icon"></i>
          <div>{{ item.title }}</div>
        </NuxtLink>
        <ul v-if="item.childs.length > 0" class="menu-sub">
          <li v-for="child in item.childs" class="menu-item" :class="{ active: isSameUrl(child.link) }">
            <NuxtLink :to="child.link" class="menu-link">
              <div>{{ child.title }}</div>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <!-- Navbar links End -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: "Dashboards",
          icon: "menu-icon tf-icons mdi mdi-home-outline",
          // link: "/",
          childs: [
            {
              id: 1,
              title: "CRM",
              link: "/",
            },
            {
              id: 2,
              title: "Analytics",
              link: "/analytics"

            },
            {
              id: 3,
              title: "E-commerce",
              link: "/dashboards/ecommerce"

            }
          ],
        },
        {
          id: 2,
          title: "Profile",
          icon: "menu-icon tf-icons mdi mdi-face-man-profile",
          link: "/user",
          childs: [],
        },
        {
          id: 3,
          title: "Pages",
          icon: "menu-icon tf-icons mdi mdi-book-open-page-variant",
          // link: "/user",
          childs: [
            {
              id: 1,
              title: "Error",
              link: "/pages/error"

            },
            {
              id: 2,
              title: "Maintenance",
              link: "/pages/maintenance"

            }
          ],
        }
      ],
    };
  },
  methods: {
    isSameUrl(link) {
      const route = useRoute();
      return route.path === `${link}`;
    },
  },
};
</script>
