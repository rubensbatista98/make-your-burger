<template>
  <div>
    <Message v-show="message" :message="message" />

    <form class="burger-form" @submit="createBurger">
      <div class="input-container">
        <label for="name">Nome:</label>

        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          placeholder="Digite o seu nome"
        />
      </div>

      <div class="input-container">
        <label for="bread">Escolha pão:</label>

        <select
          v-if="!!breads.length"
          name="bread"
          id="bread"
          v-model="choosenBread"
        >
          <option value="">Selecione o pão</option>

          <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">
            {{ bread.tipo }}
          </option>
        </select>
      </div>

      <div class="input-container">
        <label for="meat">Escolha a carne do seu Burger:</label>

        <select
          v-if="!!meats.length"
          name="meat"
          id="meat"
          v-model="choosenMeat"
        >
          <option value="">Selecione o tipo de carne</option>

          <option v-for="meat in meats" :key="meat.id" :value="meat.tipo">
            {{ meat.tipo }}
          </option>
        </select>
      </div>

      <div v-if="!!extras.length" class="extras-container">
        <p class="label">Selecione os opcionais:</p>

        <div class="extras-wrapper">
          <label v-for="extra in extras" :key="extra.id">
            <input
              type="checkbox"
              name="extras"
              v-model="choosenExtras"
              :value="extra.tipo"
            />
            {{ extra.tipo }}
          </label>
        </div>
      </div>

      <button type="submit" class="button">Criar meu burger</button>
    </form>
  </div>
</template>

<script>
import Message from "@/components/message.vue";

export default {
  name: "BurgerForm",
  components: {
    Message,
  },
  data() {
    return {
      breads: [],
      meats: [],
      extras: [],
      choosenBread: "",
      choosenMeat: "",
      choosenExtras: [],
      name: "",
      message: "",
    };
  },
  methods: {
    async getIngrendients() {
      const response = await fetch("http://localhost:3000/ingredientes");
      const data = await response.json();

      this.breads = data.paes;
      this.meats = data.carnes;
      this.extras = data.opcionais;
    },

    async createBurger(event) {
      event.preventDefault();

      const data = {
        pao: this.choosenBread,
        carne: this.choosenMeat,
        nome: this.name,
        opcionais: Array.from(this.choosenExtras),
        status: "Solicitado",
      };

      await fetch("http://localhost:3000/burgers", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      this.message = "Pedido realizado com sucesso!";

      this.choosenBread = "";
      this.choosenMeat = "";
      this.choosenExtras = [];
      this.name = "";

      setTimeout(() => {
        this.message = "";
      }, 3000);
    },
  },
  mounted() {
    this.getIngrendients();
  },
};
</script>

<style scoped>
.burger-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container + .input-container {
  margin-top: 16px;
}

.input-container > label,
.extras-container > .label {
  font-weight: bold;
  color: #222;

  border-left: 4px solid #fcba03;
  padding: 4px 8px;
  margin-bottom: 16px;
}

.extras-container {
  margin: 16px 0;
}

input,
select {
  width: 300px;

  border: 2px solid #222;
  padding: 8px;

  accent-color: #222;
}

.extras-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 16px;
}

.extras-wrapper > label {
  width: 45%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  font-weight: bold;

  cursor: pointer;
}

.extras-wrapper > label > input {
  width: auto;
}

.button {
  display: block;

  font-size: 16px;
  font-weight: bold;

  color: #fcba03;
  background-color: #222;

  border: 2px solid #222;
  border-radius: 5px;

  padding: 10px;

  cursor: pointer;
  transition: background-color 500ms;
}

.button:hover {
  color: #222;
  background-color: transparent;
}
</style>
