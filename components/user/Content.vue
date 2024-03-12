<script setup>
const activeTab = ref(1);

const handleClick = (value) => {
  activeTab.value = value;
};
</script>
<template>
  <!-- Content -->

  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="py-3 mb-4">
      <span class="text-muted fw-light">User / View /</span> Account
    </h4>
    <div class="row">
      <!-- User Sidebar -->
      <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
        <!-- User Card -->
        <div class="card mb-4">
          <div class="card-body">
            <div class="user-avatar-section">
              <div class="d-flex align-items-center flex-column">
                <img
                  class="img-fluid rounded mb-3 mt-4"
                  src="/assets/img/avatars/10.png"
                  height="120"
                  width="120"
                  alt="User avatar"
                />
                <div class="user-info text-center">
                  <h4>Violet Mendoza</h4>
                  <span class="badge bg-label-danger rounded-pill">Author</span>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between flex-wrap my-2 py-3">
              <div class="d-flex align-items-center me-4 mt-3 gap-3">
                <div class="avatar">
                  <div class="avatar-initial bg-label-primary rounded">
                    <i class="mdi mdi-check mdi-24px"></i>
                  </div>
                </div>
                <div>
                  <h4 class="mb-0">1.23k</h4>
                  <span>Tasks Done</span>
                </div>
              </div>
              <div class="d-flex align-items-center mt-3 gap-3">
                <div class="avatar">
                  <div class="avatar-initial bg-label-primary rounded">
                    <i class="mdi mdi-star-outline mdi-24px"></i>
                  </div>
                </div>
                <div>
                  <h4 class="mb-0">568</h4>
                  <span>Projects Done</span>
                </div>
              </div>
            </div>
            <h5 class="pb-3 border-bottom mb-3">Details</h5>
            <div class="info-container">
              <ul class="list-unstyled mb-4">
                <li class="mb-3">
                  <span class="h6">Username:</span>
                  <span>@violet.dev</span>
                </li>
                <li class="mb-3">
                  <span class="h6">Email:</span>
                  <span>vafgot@vultukir.org</span>
                </li>
                <li class="mb-3">
                  <span class="h6">Status:</span>
                  <span class="badge bg-label-success rounded-pill"
                    >Active</span
                  >
                </li>
                <li class="mb-3">
                  <span class="h6">Role:</span>
                  <span>Author</span>
                </li>
                <li class="mb-3">
                  <span class="h6">Tax id:</span>
                  <span>Tax-8965</span>
                </li>
                <li class="mb-3">
                  <span class="h6">Contact:</span>
                  <span>(123) 456-7890</span>
                </li>
                <li class="mb-3">
                  <span class="h6">Languages:</span>
                  <span>French</span>
                </li>
                <li class="mb-3">
                  <span class="h6">Country:</span>
                  <span>England</span>
                </li>
              </ul>
              <div class="d-flex justify-content-center">
                <a
                  href="javascript:;"
                  class="btn btn-primary me-3"
                  data-bs-target="#editUser"
                  data-bs-toggle="modal"
                  >Edit</a
                >
                <a
                  href="javascript:;"
                  class="btn btn-outline-danger suspend-user"
                  >Suspend</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- /User Card -->
        <!-- Plan Card -->
        <div class="card mb-4 border-2 border-primary">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start">
              <span class="badge bg-label-primary rounded-pill">Standard</span>
              <div class="d-flex justify-content-center">
                <sub class="h5 pricing-currency mt-auto mb-2 text-primary"
                  >$</sub
                >
                <h1 class="display-3 mb-0 text-primary">99</h1>
                <sub class="h6 pricing-duration mt-auto mb-2 fw-normal"
                  >month</sub
                >
              </div>
            </div>
            <ul class="list-unstyled g-2 my-4 ms-n2">
              <li class="mb-2 d-flex align-items-center">
                <i class="mdi mdi-circle-medium text-lighter mdi-24px"></i
                ><span>10 Users</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="mdi mdi-circle-medium text-lighter mdi-24px"></i
                ><span>Up to 10 GB storage</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                <i class="mdi mdi-circle-medium text-lighter mdi-24px"></i
                ><span>Basic Support</span>
              </li>
            </ul>
            <div class="d-flex justify-content-between align-items-center mb-1">
              <span class="h6 mb-0">Days</span>
              <span class="h6 mb-0">65%</span>
            </div>
            <div class="progress mb-1 rounded" style="height: 6px">
              <div
                class="progress-bar rounded"
                role="progressbar"
                style="width: 65%"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span>4 days remaining</span>
            <div class="d-grid w-100 mt-4">
              <button
                class="btn btn-primary"
                data-bs-target="#upgradePlanModal"
                data-bs-toggle="modal"
              >
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
        <!-- /Plan Card -->
      </div>
      <!--/ User Sidebar -->

      <!-- User Content -->
      <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
        <!-- User Tabs -->
        <ul class="nav nav-pills flex-column flex-md-row flex-wrap mb-4">
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab === 1 }"
              @click="handleClick(1)"
            >
              <i class="mdi mdi-account-outline mdi-20px me-1"></i>Account
            </button>

            <!-- <a class="nav-link active" href="javascript:void(0);"
              ><i class="mdi mdi-account-outline mdi-20px me-1"></i>Account</a
            > -->
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab === 2 }"
              @click="handleClick(2)"
            >
              <i class="mdi mdi-lock-open-outline mdi-20px me-1"></i>Security
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeTab === 3 }"
              @click="handleClick(3)"
            >
              <i class="mdi mdi-bookmark-outline me-1"></i>Billing Details
            </button>
          </li>
        </ul>
        <!--/ User Tabs -->
        <div class="tab-content">
          <div v-if="activeTab === 1">
            <UserAccount />
          </div>
          <div v-else-if="activeTab === 2">
            <UserSecurity />
          </div>
          <div v-else-if="activeTab === 3">
            <UserBilling />
          </div>
        </div>
        <!-- /Invoice table -->
      </div>
      <!--/ User Content -->
    </div>

    <!-- Modal -->
    <ModalEdituser/>
    <!-- /Modal -->
  </div>
  <!-- / Content -->
</template>
