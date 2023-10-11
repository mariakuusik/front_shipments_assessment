<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Shipment Details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3 text-start">
                  <label for="input1" class="form-label">Order No</label>
                  <input v-model="selectedShipment.orderNo" type="text" class="form-control my-focus-area" id="input1">
                </div>
                <div class="mb-3 text-start">
                  <label for="input2" class="form-label">Customer</label>
                  <input v-model="selectedShipment.customer" type="text" class="form-control my-focus-area" id="input2">
                </div>
                <div class="mb-3 text-start">
                  <label for="input3" class="form-label">Consignee</label>
                  <input v-model="selectedShipment.consignee" type="text" class="form-control my-focus-area" id="input3">
                </div>
              </div>
              <div class="col-md-6 text-start">
                <div class="mb-3">
                  <label for="input4" class="form-label">Date</label>
                  <input v-model="selectedShipment.date" type="text" class="form-control my-focus-area" id="input4">
                </div>
                <div class="mb-3 text-start">
                  <label for="input5" class="form-label">Tracking No</label>
                  <input v-model="selectedShipment.trackingNo" type="text" class="form-control my-focus-area" id="input5">
                </div>
                <div class="mb-3 text-start">
                  <label for="dropdown" class="form-label">Status</label>
                  <select v-model="selectedShipment.status" class="form-select my-focus-area" id="dropdown">
                    <option value="Shipped">Shipped</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-custom-red" data-bs-dismiss="modal">Cancel</button>
          <button @click="updateShipment" type="button" class="btn btn-custom-blue" data-bs-dismiss="modal">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShipmentDetailsModal",
  props: {
    selectedShipment: {},
  },
  data() {
    return {
      editedShipment: {},
    };
  },
  methods: {
    updateShipment() {
      this.editedShipment = {...this.selectedShipment}
      this.$emit("update-shipment", this.editedShipment)
    },
  }
}
</script>

