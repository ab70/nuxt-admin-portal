<template>
  <div>
    <!-- Current Plan -->
    <div class="card mb-4">
      <h5 class="card-header">Current Plan</h5>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-6 order-1 order-xl-0">
            <div class="mb-4">
              <p class="mb-1">
                Your Current Plan is <span class="h6">Basic</span>
              </p>
              <p>A simple start for everyone</p>
            </div>
            <div class="mb-4">
              <h6 class="mb-1">Active until Dec 09, 2021</h6>
              <p>
                We will send you a notification upon Subscription expiration
              </p>
            </div>
            <div class="mb-4">
              <h6 class="mb-1">
                <span class="me-2">$199 Per Month</span>
                <span class="badge bg-label-primary rounded-pill">Popular</span>
              </h6>
              <p>Standard plan for small to medium businesses</p>
            </div>
          </div>
          <div class="col-xl-6 order-0 order-xl-0">
            <div class="alert alert-warning mb-4" role="alert">
              <h6 class="alert-heading mb-1">We need your attention!</h6>
              <span>Your plan requires update</span>
            </div>
            <div class="plan-statistics">
              <div class="d-flex justify-content-between">
                <h6 class="mb-2">Days</h6>
                <h6 class="mb-2">24 of 30 Days</h6>
              </div>
              <div class="progress mb-1 rounded" style="height: 10px">
                <div
                  class="progress-bar w-75 rounded"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>6 days remaining until your plan requires update</p>
            </div>
          </div>
          <div class="col-12 order-2 order-xl-0">
            <button
              class="btn btn-primary me-2 my-2"
              data-bs-toggle="modal"
              data-bs-target="#upgradePlanModal"
            >
              Upgrade Plan
            </button>
            <button class="btn btn-outline-danger cancel-subscription">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Current Plan -->

    <!-- Payment Methods -->
    <div class="card card-action mb-4">
      <div class="card-header align-items-center flex-wrap gap-2">
        <h5 class="card-action-title mb-0">Payment Methods</h5>
        <div class="card-action-element">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addNewCCModal"
          >
            <i class="mdi mdi-plus me-1"></i>Add Card
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="added-cards">
          <div class="cardMaster border p-3 rounded mb-3">
            <div class="d-flex justify-content-between flex-sm-row flex-column">
              <div class="card-information">
                <img
                  class="mb-3 img-fluid"
                  src="/assets/img/icons/payments/mastercard.png"
                  alt="Master Card"
                />
                <div class="d-flex align-items-center mb-1">
                  <h6 class="mb-0 me-3">Kaith Morrison</h6>
                  <span class="badge bg-label-primary me-1 rounded-pill"
                    >Popular</span
                  >
                </div>
                <span class="card-number"
                  >&#8727;&#8727;&#8727;&#8727; &#8727;&#8727;&#8727;&#8727;
                  &#8727;&#8727;&#8727;&#8727; 9856</span
                >
              </div>
              <div class="d-flex flex-column text-start text-lg-end">
                <div class="d-flex order-sm-0 order-1">
                  <button
                    class="btn btn-outline-primary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editCCModal"
                  >
                    Edit
                  </button>
                  <button class="btn btn-outline-secondary">Delete</button>
                </div>
                <small class="mt-3 order-sm-1 order-0 text-sm-end mb-2"
                  >Card expires at 12/26</small
                >
              </div>
            </div>
          </div>
          <div class="cardMaster border p-3 rounded mb-3">
            <div class="d-flex justify-content-between flex-sm-row flex-column">
              <div class="card-information">
                <img
                  class="mb-3 img-fluid"
                  src="/assets/img/icons/payments/visa.png"
                  alt="Master Card"
                />
                <h6 class="mb-1">Tom McBride</h6>
                <span class="card-number"
                  >&#8727;&#8727;&#8727;&#8727; &#8727;&#8727;&#8727;&#8727;
                  &#8727;&#8727;&#8727;&#8727; 6542</span
                >
              </div>
              <div class="d-flex flex-column text-start text-lg-end">
                <div class="d-flex order-sm-0 order-1">
                  <button
                    class="btn btn-outline-primary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editCCModal"
                  >
                    Edit
                  </button>
                  <button class="btn btn-outline-secondary">Delete</button>
                </div>
                <small class="mt-3 order-sm-1 order-0 text-sm-end mb-2"
                  >Card expires at 10/24</small
                >
              </div>
            </div>
          </div>
          <div class="cardMaster border p-3 rounded">
            <div class="d-flex justify-content-between flex-sm-row flex-column">
              <div class="card-information">
                <img
                  class="mb-3 img-fluid"
                  src="/assets/img/icons/payments/american-express-logo.png"
                  alt="Visa Card"
                />
                <div class="d-flex align-items-center mb-1">
                  <h6 class="mb-0 me-3">Mildred Wagner</h6>
                  <span class="badge bg-label-danger me-1 rounded-pill"
                    >Expired</span
                  >
                </div>
                <span class="card-number"
                  >&#8727;&#8727;&#8727;&#8727; &#8727;&#8727;&#8727;&#8727;
                  &#8727;&#8727;&#8727;&#8727; 5896</span
                >
              </div>
              <div class="d-flex flex-column text-start text-lg-end">
                <div class="d-flex order-sm-0 order-1">
                  <button
                    class="btn btn-outline-primary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editCCModal"
                  >
                    Edit
                  </button>
                  <button class="btn btn-outline-secondary">Delete</button>
                </div>
                <small class="mt-3 order-sm-1 order-0 text-sm-end mb-2"
                  >Card expires at 10/27</small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ Payment Methods -->

    <!-- Billing Address -->
    <div class="card card-action mb-4">
      <div class="card-header align-items-center flex-wrap gap-2">
        <h5 class="card-action-title mb-0">Billing Address</h5>
        <div class="card-action-element">
          <button
            class="btn btn-primary edit-address"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addNewAddress"
          >
            Edit address
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-7 col-12">
            <dl class="row mb-0">
              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                Company Name:
              </dt>
              <dd class="col-sm-8">Materio</dd>

              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                Billing Email:
              </dt>
              <dd class="col-sm-8">user@ex.com</dd>

              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                Tax ID:
              </dt>
              <dd class="col-sm-8">TAX-357378</dd>

              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                VAT Number:
              </dt>
              <dd class="col-sm-8">SDF754K77</dd>

              <dt
                class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading mb-0"
              >
                Billing Address:
              </dt>
              <dd class="col-sm-8 mb-0">
                100 Water Plant <br />Avenue, Building 1303<br />
                Wake Island
              </dd>
            </dl>
          </div>
          <div class="col-xl-5 col-12">
            <dl class="row mb-0">
              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                Contact:
              </dt>
              <dd class="col-sm-8">+1 (605) 977-32-65</dd>

              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                Country:
              </dt>
              <dd class="col-sm-8">Wake Island</dd>

              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                State:
              </dt>
              <dd class="col-sm-8">Capholim</dd>

              <dt class="col-sm-4 mb-sm-3 text-nowrap fw-medium text-heading">
                Zipcode:
              </dt>
              <dd class="col-sm-8">403114</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <!--/ Billing Address -->
  </div>
  <!-- Modal -->

  <ModalAddaddress />
  <ModalAddcreditcard />
  <ModalEditcard />
  <ModalEditbilling/>

  <div
    class="modal fade"
    id="upgradePlanModal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan"
    >
      <div class="modal-content p-3 p-md-5">
        <div class="modal-body pt-md-0 px-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="text-center mb-4">
            <h3 class="mb-2 pb-1">Upgrade Plan</h3>
            <p>Choose the best plan for user.</p>
          </div>
          <form
            id="upgradePlanForm"
            class="row g-3 d-flex align-items-center"
            onsubmit="return false"
          >
            <div class="col-sm-9">
              <div class="form-floating form-floating-outline">
                <select
                  id="choosePlan"
                  name="choosePlan"
                  class="form-select"
                  aria-label="Choose Plan"
                >
                  <option selected>Choose Plan</option>
                  <option value="standard">Standard - $99/month</option>
                  <option value="exclusive">Exclusive - $249/month</option>
                  <option value="Enterprise">Enterprise - $499/month</option>
                </select>
                <label for="choosePlan">Choose Plan</label>
              </div>
            </div>
            <div class="col-sm-3 d-flex align-items-end">
              <button type="submit" class="btn btn-primary">Upgrade</button>
            </div>
          </form>
        </div>
        <hr class="mx-md-n5 mx-n3" />
        <div class="modal-body pb-md-0 px-0">
          <p class="mb-0">User current plan is standard plan</p>
          <div
            class="d-flex justify-content-between align-items-center flex-wrap"
          >
            <div class="d-flex justify-content-center me-2 mt-3">
              <sup class="h5 pricing-currency pt-1 mt-2 mb-0 me-1 text-primary"
                >$</sup
              >
              <h1 class="display-3 mb-0 text-primary">99</h1>
              <sub class="h6 pricing-duration mt-auto mb-2 pb-1 text-body"
                >/month</sub
              >
            </div>
            <button class="btn btn-outline-danger cancel-subscription mt-3">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
