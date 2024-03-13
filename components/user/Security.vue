<template>
    <!-- Change Password -->
    <div class="card mb-4">
      <h5 class="card-header">Change Password</h5>
      <div class="card-body">
        <form id="formChangePassword" method="GET" onsubmit="return false">
          <div class="alert alert-warning" role="alert">
            <h6 class="alert-heading mb-1">
              Ensure that these requirements are met
            </h6>
            <span>Minimum 8 characters long, uppercase & symbol</span>
          </div>
          <div class="row">
            <div class="mb-3 col-12 col-sm-6 form-password-toggle">
              <div class="input-group input-group-merge">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  />
                  <label for="newPassword">New Password</label>
                </div>
                <span class="input-group-text cursor-pointer"
                  ><i class="mdi mdi-eye-off-outline"></i
                ></span>
              </div>
            </div>
            <div class="mb-3 col-12 col-sm-6 form-password-toggle">
              <div class="input-group input-group-merge">
                <div class="form-floating form-floating-outline">
                  <input
                    class="form-control"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  />
                  <label for="confirmPassword">Confirm New Password</label>
                </div>
                <span class="input-group-text cursor-pointer"
                  ><i class="mdi mdi-eye-off-outline"></i
                ></span>
              </div>
            </div>
            <div>
              <button type="submit" class="btn btn-primary me-2">
                Change Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--/ Change Password -->

    <!-- Two-steps verification -->
    <div class="card mb-4">
      <div class="card-header">
        <h5 class="mb-2">Two-steps verification</h5>
        <span class="text-muted"
          >Keep your account secure with authentication step.</span
        >
      </div>
      <div class="card-body">
        <h6 class="mt-1">SMS</h6>
        <div class="d-flex justify-content-between border-bottom mb-4">
          <span class="pb-1">+1(968) 945-8832</span>
          <div class="action-icons">
            <a
              href="javascript:;"
              class="text-body me-1"
              data-bs-target="#enableOTP"
              data-bs-toggle="modal"
              ><i class="mdi mdi-pencil-outline"></i
            ></a>
            <a href="javascript:;" class="text-body"
              ><i class="mdi mdi-delete-outline"></i
            ></a>
          </div>
        </div>
        <p class="mb-0">
          Two-factor authentication adds an additional layer of security to your
          account by requiring more than just a password to log in.
          <a href="javascript:void(0);">Learn more.</a>
        </p>
      </div>
    </div>
    <!--/ Two-steps verification -->

    <!-- Recent Devices -->
    <div class="card mb-4">
      <h5 class="card-header">Recent Devices</h5>
      <div class="table-responsive">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th class="text-truncate">Browser</th>
              <th class="text-truncate">Device</th>
              <th class="text-truncate">Location</th>
              <th class="text-truncate">Recent Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-truncate">
                <img
                  src="/assets/img/icons/brands/chrome.png"
                  alt="Chrome"
                  class="me-3"
                  width="22"
                  height="22"
                /><span class="text-heading">Chrome on Windows</span>
              </td>
              <td class="text-truncate">HP Spectre 360</td>
              <td class="text-truncate">Switzerland</td>
              <td class="text-truncate">10, July 2021 20:07</td>
            </tr>
            <tr>
              <td class="text-truncate">
                <img
                  src="/assets/img/icons/brands/chrome.png"
                  alt="Chrome"
                  class="me-3"
                  width="22"
                  height="22"
                /><span class="text-heading">Chrome on iPhone</span>
              </td>
              <td class="text-truncate">iPhone 12x</td>
              <td class="text-truncate">Australia</td>
              <td class="text-truncate">13, July 2021 10:10</td>
            </tr>
            <tr>
              <td class="text-truncate">
                <img
                  src="/assets/img/icons/brands/chrome.png"
                  alt="Chrome"
                  class="me-3"
                  width="22"
                  height="22"
                /><span class="text-heading">Chrome on Android</span>
              </td>
              <td class="text-truncate">Oneplus 9 Pro</td>
              <td class="text-truncate">Dubai</td>
              <td class="text-truncate">14, July 2021 15:15</td>
            </tr>
            <tr>
              <td class="text-truncate">
                <img
                  src="/assets/img/icons/brands/chrome.png"
                  alt="Chrome"
                  class="me-3"
                  width="22"
                  height="22"
                /><span class="text-heading">Chrome on MacOS</span>
              </td>
              <td class="text-truncate">Apple iMac</td>
              <td class="text-truncate">India</td>
              <td class="text-truncate">16, July 2021 16:17</td>
            </tr>
            <tr>
              <td class="text-truncate">
                <img
                  src="/assets/img/icons/brands/chrome.png"
                  alt="Chrome"
                  class="me-3"
                  width="22"
                  height="22"
                /><span class="text-heading">Chrome on Windows</span>
              </td>
              <td class="text-truncate">HP Spectre 360</td>
              <td class="text-truncate">Switzerland</td>
              <td class="text-truncate">20, July 2021 21:01</td>
            </tr>
            <tr>
              <td class="text-truncate border-bottom-0">
                <img
                  src="/assets/img/icons/brands/chrome.png"
                  alt="Chrome"
                  class="me-3"
                  width="22"
                  height="22"
                /><span class="text-heading">Chrome on Android</span>
              </td>
              <td class="text-truncate border-bottom-0">Oneplus 9 Pro</td>
              <td class="text-truncate border-bottom-0">Dubai</td>
              <td class="text-truncate border-bottom-0">21, July 2021 12:22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
