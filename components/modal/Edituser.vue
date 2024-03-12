<template>
        <!-- Edit User Modal -->
        <div class="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-simple modal-edit-user">
        <div class="modal-content p-3 p-md-5">
          <div class="modal-body py-3 py-md-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="text-center mb-4">
              <h3 class="mb-2">Edit User Information</h3>
              <p class="pt-1">
                Updating user details will receive a privacy audit.
              </p>
            </div>
            <form id="editUserForm" class="row g-4" onsubmit="return false">
              <div class="col-12 col-md-6">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    id="modalEditUserFirstName"
                    name="modalEditUserFirstName"
                    class="form-control"
                    placeholder="John"
                  />
                  <label for="modalEditUserFirstName">First Name</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    id="modalEditUserLastName"
                    name="modalEditUserLastName"
                    class="form-control"
                    placeholder="Doe"
                  />
                  <label for="modalEditUserLastName">Last Name</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    id="modalEditUserName"
                    name="modalEditUserName"
                    class="form-control"
                    placeholder="john.doe.007"
                  />
                  <label for="modalEditUserName">Username</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    id="modalEditUserEmail"
                    name="modalEditUserEmail"
                    class="form-control"
                    placeholder="example@domain.com"
                  />
                  <label for="modalEditUserEmail">Email</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-floating form-floating-outline">
                  <select
                    id="modalEditUserStatus"
                    name="modalEditUserStatus"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                    <option value="3">Suspended</option>
                  </select>
                  <label for="modalEditUserStatus">Status</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-floating form-floating-outline">
                  <input
                    type="text"
                    id="modalEditTaxID"
                    name="modalEditTaxID"
                    class="form-control modal-edit-tax-id"
                    placeholder="123 456 7890"
                  />
                  <label for="modalEditTaxID">Tax ID</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="input-group input-group-merge">
                  <span class="input-group-text">US (+1)</span>
                  <div class="form-floating form-floating-outline">
                    <input
                      type="text"
                      id="modalEditUserPhone"
                      name="modalEditUserPhone"
                      class="form-control phone-number-mask"
                      placeholder="202 555 0111"
                    />
                    <label for="modalEditUserPhone">Phone Number</label>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <label class="switch">
                  <input type="checkbox" class="switch-input" />
                  <span class="switch-toggle-slider">
                    <span class="switch-on"></span>
                    <span class="switch-off"></span>
                  </span>
                  <span class="switch-label">Use as a billing address?</span>
                </label>
              </div>
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary me-sm-3 me-1">
                  Submit
                </button>
                <button
                  type="reset"
                  class="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>