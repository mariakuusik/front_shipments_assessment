<template>
  <ShipmentDetailsModal
      :open-modal="showModal"
      :selected-shipment="selectedShipment"
      @close="closeModal"
  />
  <div class="home">
    <h1>Shipments table</h1>
  </div>
  <table>
    <tr>
      <th>Orderno</th>
      <th>Deliverydate</th>
      <th>Customer</th>
      <th>Trackingno</th>
      <th>Status</th>
      <th>Consignee</th>
      <th></th>
      <th></th>
    </tr>
    <tr v-for="shipment in shipments" :key="shipment.orderNo">
      <td>{{ shipment.orderNo }}</td>
      <td>{{ shipment.date }}</td>
      <td>{{ shipment.customer }}</td>
      <td>{{ shipment.trackingNo }}</td>
      <td>{{ shipment.status }}</td>
      <td>{{ shipment.consignee }}</td>
      <td>
        <button @click="openShipmentDetailsModal(shipment)">details</button>
      </td>
      <td>
        <button>delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import ShipmentDetailsModal from "@/components/ShipmentDetailsModal.vue";

export default {
  name: 'ShipmentsTable',
  components: {ShipmentDetailsModal},
  data() {
    return {
      shipments: [
        {
          orderNo: 0,
          date: 0,
          customer: '',
          trackingNo: 0,
          status: '',
          consignee: ''
        }
      ],
      errorResponse: '',
      showModal: false,
      selectedShipment: null
    }
  },
  methods: {
    async fetchShipments() {
      try {
        const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
        this.shipments = response.data
      } catch (error) {
        this.errorResponse = error.response.data
      }
    },
    openShipmentDetailsModal(shipment) {
      this.selectedShipment = shipment
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },

  beforeMount() {
    this.fetchShipments()
  }
}
</script>
