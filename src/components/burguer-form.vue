<template>
  <form class="burguer-form">
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

      <select v-if="!!breads.length" name="bread" id="bread" v-model="bread">
        <option value="">Selecione o pão</option>

        <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">
          {{ bread.tipo }}
        </option>
      </select>
    </div>

    <div class="input-container">
      <label for="meat">Escolha a carne do seu Burguer:</label>

      <select v-if="!!meats.length" name="meat" id="meat" v-model="meat">
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
            :name="extra.tipo"
            v-model="selectedExtras"
            :value="extra.tipo"
          />
          {{ extra.tipo }}
        </label>
      </div>
    </div>

    <button type="submit" class="button">Criar meu burguer</button>
  </form>
</template>

<script>
export default {
  name: "BurguerForm",
  data() {
    return {
      breads: [],
      meats: [],
      extras: [],
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
  },
  mounted() {
    this.getIngrendients();
  },
};
</script>

<style scoped>
.burguer-form {
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
