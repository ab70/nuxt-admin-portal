<template>
  <!-- Project table -->
  <div class="card mb-4">
    <h5 class="card-header">User's Projects List</h5>
    <div class="card-datatable table-responsive">
      <table class="table datatable-project">
        <thead class="table-light">
          <tr>
            <th></th>
            <th></th>
            <th>Project</th>
            <th class="text-nowrap">Total Task</th>
            <th>Progress</th>
            <th>Hours</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
  <!-- /Project table -->

  <!-- Activity Timeline -->
  <div class="card mb-4">
    <h5 class="card-header">User Activity Timeline</h5>
    <div class="card-body pb-0 pt-3">
      <ul class="timeline mb-0">
        <li class="timeline-item timeline-item-transparent">
          <span class="timeline-point timeline-point-danger"></span>
          <div class="timeline-event">
            <div class="timeline-header mb-1">
              <h6 class="mb-0">12 Invoices have been paid</h6>
              <span class="text-muted">12 min ago</span>
            </div>
            <p class="text-muted mb-2">
              Invoices have been paid to the company
            </p>
            <div class="d-flex">
              <a href="javascript:void(0)" class="me-3">
                <img
                  src="/assets/img/icons/misc/pdf.png"
                  alt="PDF image"
                  width="15"
                  class="me-2"
                />
                <span class="fw-medium text-heading">invoices.pdf</span>
              </a>
            </div>
          </div>
        </li>
        <li class="timeline-item timeline-item-transparent">
          <span class="timeline-point timeline-point-primary"></span>
          <div class="timeline-event">
            <div class="timeline-header mb-1">
              <h6 class="mb-0">Client Meeting</h6>
              <span class="text-muted">45 min ago</span>
            </div>
            <p class="text-muted mb-2">Project meeting with john @10:15am</p>
            <div class="d-flex flex-wrap">
              <div class="avatar me-3">
                <img
                  src="/assets/img/avatars/3.png"
                  alt="Avatar"
                  class="rounded-circle"
                />
              </div>
              <div>
                <h6 class="mb-0">Lester McCarthy (Client)</h6>
                <span class="text-muted">CEO of ThemeSelection</span>
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-item timeline-item-transparent">
          <span class="timeline-point timeline-point-warning"></span>
          <div class="timeline-event">
            <div class="timeline-header mb-1">
              <h6 class="mb-0">Create a new project for client</h6>
              <span class="text-muted">2 Day Ago</span>
            </div>
            <p class="text-muted mb-2">5 team members in a project</p>
            <div class="d-flex align-items-center avatar-group">
              <div
                class="avatar pull-up"
                data-bs-toggle="tooltip"
                data-popup="tooltip-custom"
                data-bs-placement="top"
                title="Vinnie Mostowy"
              >
                <img
                  src="/assets/img/avatars/5.png"
                  alt="Avatar"
                  class="rounded-circle"
                />
              </div>
              <div
                class="avatar pull-up"
                data-bs-toggle="tooltip"
                data-popup="tooltip-custom"
                data-bs-placement="top"
                title="Marrie Patty"
              >
                <img
                  src="/assets/img/avatars/12.png"
                  alt="Avatar"
                  class="rounded-circle"
                />
              </div>
              <div
                class="avatar pull-up"
                data-bs-toggle="tooltip"
                data-popup="tooltip-custom"
                data-bs-placement="top"
                title="Jimmy Jackson"
              >
                <img
                  src="/assets/img/avatars/9.png"
                  alt="Avatar"
                  class="rounded-circle"
                />
              </div>
              <div class="avatar">
                <span
                  class="avatar-initial rounded-circle pull-up bg-lighter text-body"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="3 more"
                  >+3</span
                >
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-item timeline-item-transparent border-transparent">
          <span class="timeline-point timeline-point-info"></span>
          <div class="timeline-event">
            <div class="timeline-header mb-1">
              <h6 class="mb-0">Design Review</h6>
              <span class="text-muted">5 days Ago</span>
            </div>
            <p class="text-muted mb-0">
              Weekly review of freshly prepared design for our new app.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- /Activity Timeline -->

  <!-- Invoice table -->
  <div class="card mb-4">
    <div class="card-datatable table-responsive">
      <table class="table datatable-invoice">
        <thead class="table-light">
          <tr>
            <th></th>
            <th>ID</th>
            <th><i class="mdi mdi-trending-up"></i></th>
            <th>Total</th>
            <th>Issued Date</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
