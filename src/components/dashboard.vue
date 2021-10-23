<template>
  <div v-if="!!orders.length" id="order-table">
    <div>
      <div id="order-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>

    <div id="order-table-rows">
      <div class="order-table-row" v-for="order in orders" :key="order.id">
        <div class="order-number">{{ order.id }}</div>
        <div>{{ order.name }}</div>
        <div>{{ order.bread }}</div>
        <div>{{ order.meat }}</div>

        <div>
          <ul v-show="!!order.extras.length">
            <li v-for="extra in order.extras" :key="extra">{{ extra }}</li>
          </ul>
        </div>

        <div v-show="!!status.length">
          <select
            name="status"
            class="status"
            :value="order.status"
            @change="updateOrderStatus($event, order.id)"
          >
            <option
              v-for="statusInfo in status"
              :key="statusInfo.id"
              :value="statusInfo.tipo"
            >
              {{ statusInfo.tipo }}
            </option>
          </select>

          <button class="delete-btn" @click="deleteOrder(order.id)">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <h2 v-else>Não há pedidos no momento!</h2>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      orders: [],
      status: [],
    };
  },
  methods: {
    async getOrders() {
      const [burgersResponse, statusResponse] = await Promise.all([
        fetch("http://localhost:3000/burgers"),
        fetch("http://localhost:3000/status"),
      ]);

      const [burgersData, statusData] = await Promise.all([
        burgersResponse.json(),
        statusResponse.json(),
      ]);

      this.status = statusData;
      this.orders = burgersData.map((order) => ({
        id: order.id,
        name: order.nome,
        meat: order.carne,
        bread: order.pao,
        extras: [...order.opcionais],
        status: order.status,
      }));
    },

    async deleteOrder(id) {
      await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      this.getOrders();
    },

    async updateOrderStatus(event, id) {
      const data = JSON.stringify({ status: event.target.value });

      await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      this.getOrders();
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>

<style scoped>
#order-table {
  max-width: 1200px;
  margin: 0 auto;
}

#order-table-heading,
#order-table-rows,
.order-table-row {
  display: flex;
  flex-wrap: wrap;
}

#order-table-heading {
  font-weight: bold;

  border-bottom: 3px solid #333;
  padding: 12px;
}

.order-table-row {
  width: 100%;

  border-bottom: 1px solid #ccc;
  padding: 12px;
}

#order-table-heading div,
.order-table-row div {
  width: 19%;
}

#order-table-heading .order-id,
.order-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 4px;
  margin-right: 8px;
}

.delete-btn {
  font-size: 16px;
  font-weight: bold;

  color: #fcba03;
  background-color: #222;

  border: 2px solid #222;
  border-radius: 4px;

  padding: 10px;
  margin: 0 auto;

  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  color: #222;
  background-color: transparent;
}

h2 {
  text-align: center;
}
</style>
