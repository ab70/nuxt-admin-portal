<template>
  <!-- Menu -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <LayoutMenu/>
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Nav header start -->
        <LayoutHeader />
        <!-- Nav header end -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- <CrmContent /> -->
          <slot/>
          <!-- Footer component start -->
          <Footer />
          <!-- Footer component end -->
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
</template>

<script></script>
