import { defineStore } from "pinia";
import { ref } from "vue";

interface dataInterface {
  id: string;
  username: string;
  email: string;
  account_type: string;
}

export const useUserStore = defineStore("user", () => {
  const userData = ref<dataInterface | null>(null);

  function setUser(data: dataInterface) {
    userData.value = data;
  }

  function cleanUser() {
    userData.value = null;
  }

  return { userData, setUser, cleanUser };
});
