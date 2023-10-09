<template>
  <div v-if="openModal" class="modal">
    <div class="modal-content">
      <h2>Shipment details</h2>
      <table>
        <tr>
          <th>Order No</th>
          <td><input v-model="selectedShipment.orderNo"></td>
        </tr>
        <tr>
          <th>Customer</th>
          <td><input v-model="selectedShipment.customer"></td>
        </tr>
        <tr>
          <th>Consignee</th>
          <td><input v-model="selectedShipment.consignee"></td>
        </tr>
        <tr>
          <th>Date</th>
          <td><input v-model="selectedShipment.date"></td>
        </tr>
        <tr>
          <th>Tracking No</th>
          <td><input v-model="selectedShipment.trackingNo"></td>
        </tr>
        <tr>
          <th>Status</th>
          <td><input v-model="selectedShipment.status"></td>
        </tr>
      </table>
    </div>
    <button @click="closeModal">close modal</button>
    <button @click="updateShipment">Update content</button>
  </div>
</template>

<script>
export default {
  name: "ShipmentDetailsModal",
  props: {
    openModal: Boolean,
    selectedShipment: {}
  },
  data(){
    return{
      editedShipment: {...this.selectedShipment}
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    updateShipment() {
    console.log("Edited shipment:", this.editedShipment)
      this.$emit("update", this.editedShipment)
      this.closeModal()
      }

    }
}
</script>
