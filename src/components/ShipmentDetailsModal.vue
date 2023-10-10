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
                  <label for="input1">Order No</label>
                  <input v-model="selectedShipment.orderNo" type="text" class="form-control" id="input1">
                </div>
                <div class="mb-3 text-start">
                  <label for="input2">Customer</label>
                  <input v-model="selectedShipment.customer" type="text" class="form-control" id="input2">
                </div>
                <div class="mb-3 text-start">
                  <label for="input3">Consignee</label>
                  <input v-model="selectedShipment.consignee" type="text" class="form-control" id="input3">
                </div>
              </div>
              <div class="col-md-6 text-start">
                <div class="mb-3">
                  <label for="input4">Date</label>
                  <input v-model="selectedShipment.date" type="text" class="form-control" id="input4">
                </div>
                <div class="mb-3 text-start">
                  <label for="input5">Tracking No</label>
                  <input v-model="selectedShipment.trackingNo" type="text" class="form-control" id="input5">
                </div>
                <div class="mb-3 text-start">
                  <label for="dropdown">Status</label>
                  <select v-model="selectedShipment.status" class="form-select" id="dropdown">
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

