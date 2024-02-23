<template>
  <div
    id="layout-menu"
    class="layout-menu menu-vertical menu bg-menu-theme"
    style="margin-top: 15px"
  >
    <div class="app-brand demo">
      <NuxtLink to="/" class="app-brand-link">
        <span class="app-brand-text demo menu-text fw-semibold ms-2"
          >Materio</span
        >
      </NuxtLink>

      <a
        href="javascript:void(0);"
        class="layout-menu-toggle menu-link text-large ms-auto"
      >
        <!-- <i class="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i> -->
        <img src="/assets/img/layouts/navIcon.svg" style="height: 20px;"/>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>
    <ul class="menu-inner py-1">
      <li class="menu-header fw-medium mt-4">
        <span class="menu-header-text">Admin Panel</span>
      </li>
      <li
        v-for="item in menuItems"
        class="menu-item"
        :class="{ active: isSameUrl(item.link) }"
      >
        <NuxtLink :to="item.link" class="menu-link">
          <i :class="item.icon"></i>
          <div>{{ item.title }}</div>
        </NuxtLink>
      </li>

      <!-- Dashboards -->
      <!-- <li class="menu-item active open">
        <a href="/" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons mdi mdi-home-outline"></i>
          <div>Dashboards</div>
          <div class="badge bg-danger rounded-pill ms-auto">5</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item active">
            <NuxtLink to="/" class="menu-link">
              <div>Dashboard</div>
            </NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/user" class="menu-link">
              <div>User</div>
            </NuxtLink>
          </li>
        </ul>
      </li> -->
    </ul>
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
          link: "/",
          childs: [
            {
              id: 1,
              title: "Dashboard",
              link: "/dashboard",
            },
            {
              id: 2,
              title: "User",
              link: "/user",
            },
          ],
        },
        {
          id: 2,
          title: "Profile",
          icon: "menu-icon tf-icons mdi mdi-email-outline",
          link: "/user",
          childs: [],
        },
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
