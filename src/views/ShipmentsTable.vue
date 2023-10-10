<template>
  <div class="home">
    <h1>Shipments table</h1>
  </div>
  <table>
    <tr>
      <th>Order No</th>
      <th>Delivery Date</th>
      <th>Customer</th>
      <th>Tracking No</th>
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
        <button>details</button>
      </td>
      <td>
        <button @click="deleteShipment(shipment)">delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios, {} from "axios";

export default {
  name: 'ShipmentsTable',
  components: {},
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
      selectedShipment: null,
      shipmentToDelete: null
    }
  },
  methods: {
    async fetchShipments() {
      try {
        const response = await axios.get('../Shipments.txt')
        this.shipments = response.data
      } catch (error) {
        this.errorResponse = error.response.data
      }
    },
    deleteShipment(shipmentToDelete) {
      const indexToDelete = this.shipments.findIndex(shipment => shipment === shipmentToDelete)
      if (indexToDelete !== -1) {
        this.shipments.splice(indexToDelete, 1)
      }
    },
  },
  beforeMount() {
    this.fetchShipments()
  }
}
</script>
