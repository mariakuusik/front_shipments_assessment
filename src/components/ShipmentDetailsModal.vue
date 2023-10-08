<template>
  <div v-if="openModal" class="modal">
    <div class="modal-content">
      <h2>Shipment details</h2>
      <table>
        <tr>
          <th>test</th>
          <th>test</th>
          <th>test</th>
          <th>test</th>
          <th>test</th>
          <th>test</th>
        </tr>
        <tr>
          <td>{{ selectedShipment.orderNo }}</td>
          <td>{{ selectedShipment.customer }}</td>
          <td>{{ selectedShipment.consignee }}</td>
          <td>{{ selectedShipment.date }}</td>
          <td>{{ selectedShipment.trackingNo }}</td>
          <td>{{ selectedShipment.status }}</td>
        </tr>
      </table>
    </div>
    <button @click="closeModal">close modal</button>
  </div>
</template>

<script>
export default {
  name: "ShipmentDetailsModal",
  props: {
    openModal: Boolean,
    selectedShipment: {}
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  }
}
</script>
