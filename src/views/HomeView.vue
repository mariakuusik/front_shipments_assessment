<template>
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
    <tr v-for="shipment in shipments" :key="shipment.id">
      <td>{{ shipment.orderNo }}</td>
      <td>{{ shipment.date }}</td>
      <td>{{ shipment.customer }}</td>
      <td>{{shipment.trackingNo}}</td>
      <td>{{shipment.status}}</td>
      <td>{{shipment.consignee}}</td>
      <td><button>details</button></td>
      <td><button>delete</button></td>
    </tr>
  </table>

</template>

<script>
import axios from "axios";

export default {
  name: 'HomeView',
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
      errorResponse: ''
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
    }
  },

  beforeMount() {
    this.fetchShipments()
  }
}
</script>
