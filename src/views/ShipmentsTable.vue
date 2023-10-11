<template>
  <ShipmentDetailsModal :selected-shipment="selectedShipment" @update-shipment="handleUpdate"/>
  <h1>Shipments table</h1>
  <div class="container-fluid d-flex justify-content-center text-start">
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
          <tr>
            <th>Order No</th>
            <th>Delivery Date</th>
            <th class="finger-pointer-cursor" @click="sortBy('customer')">Customer
              <font-awesome-icon :icon="['fas', isSorted('customer') ? 'arrows-up-down' : '']" size="lg" style="color: #000000;" />
            </th>
            <th>Tracking No</th>
            <th>Status</th>
            <th>Consignee</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="shipment in sortedShipments" :key="shipment.orderNo">
            <td>{{ shipment.orderNo }}</td>
            <td>{{ shipment.date }}</td>
            <td>{{ shipment.customer }}</td>
            <td>{{ shipment.trackingNo }}</td>
            <td>{{ shipment.status }}</td>
            <td>{{ shipment.consignee }}</td>
            <td>
              <button type="button" class="btn btn-custom-blue" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                      @click="setSelectedShipment(shipment)">Details</button>
            </td>
            <td>
              <button type="button" class="btn btn-custom-red"
                      @click="deleteShipment(shipment)">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios, {} from "axios";
import ShipmentDetailsModal from "@/components/ShipmentDetailsModal.vue";
export default {
  name: 'ShipmentsTable',
  components: {ShipmentDetailsModal},
  data() {
    return {
      shipments: [
        {
          orderNo: '',
          date: '',
          customer: '',
          trackingNo: '',
          status: '',
          consignee: ''
        }
      ],
      errorResponse: '',
      selectedShipment: {
        orderNo: '',
        date: '',
        customer: '',
        trackingNo: '',
        status: '',
        consignee: ''
      },
      shipmentToDelete: '',
      sortKey:'customer',
      sortReverse: false
    }
  },
  computed: {
    sortedShipments() {
      const key = this.sortKey;
      const reverse = this.sortReverse ? -1 : 1;

      return [...this.shipments].sort((a, b) => {
        if (a[key] < b[key]) return -1 * reverse;
        if (a[key] > b[key]) return 1 * reverse;
        return 0;
      });
    },
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
    setSelectedShipment(shipment) {
      this.selectedShipment = {...shipment}
    },
    handleUpdate(updatedShipment) {
      const indexToUpdate = this.shipments.findIndex(shipment => shipment.orderNo === updatedShipment.orderNo)
      if (indexToUpdate !== -1){
        this.shipments[indexToUpdate] = updatedShipment
      }
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortReverse = !this.sortReverse;
      } else {
        this.sortReverse = false
      }
      this.sortKey = key
    },
    isSorted(key) {
      return this.sortKey === key
    },
  },
  beforeMount() {
    this.fetchShipments()
  }
}
</script>