<template>
  <BaseRow justify="center" align="center" height="100vh">
    <BaseCard minHeight="300px" minWidth="300px" padding="0px">
      <BaseRow>
        <BaseColumn :md="6" :sm="12">
          <BaseImage
            src="/assets/images/logos/logo-large.png"
            alt="Logo da Let's do It!"
            margin="-32px -16px"
          ></BaseImage>
        </BaseColumn>
        <BaseColumn :md="6" :sm="12"
          ><BaseForm>
            <BaseLabel
              fontWeight="600"
              alignment="text-center"
              as="h1"
              transform="text-uppercase"
              >seja bem vindo</BaseLabel
            >
            <BaseLabel
              fontWeight="400"
              color="#c0b3c2"
              alignment="text-center"
              as="h5"
              >entre para acessar suas tarefas</BaseLabel
            >
            <BaseInput label="Usuário:"></BaseInput>
            <BaseInput label="Senha:"></BaseInput>
            <BaseRow justify="space-between" margin="20px 0px">
              <BaseButton
                text="Esqueci minha senha"
                type="warning"
                plain
                :onClick="handleForgotPassword"
              ></BaseButton>

              <BaseButton text="Entrar" :onClick="handleLogin"></BaseButton>
            </BaseRow> </BaseForm></BaseColumn
      ></BaseRow> </BaseCard
  ></BaseRow>
</template>
<script lang="ts">
/** External dependencies */
import Vue from "vue";

/** Internal dependencies */
import BaseCard from "@/components/base/BaseCard.vue";
import BaseLabel from "@/components/base/BaseLabel.vue";
import BaseColumn from "@/components/base/BaseColumn.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseForm from "@/components/base/BaseForm.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseRow from "@/components/base/BaseRow.vue";
import BaseImage from "@/components/base/BaseImage.vue";

export default Vue.extend({
  name: "LoginPage",
  components: {
    BaseCard,
    BaseLabel,
    BaseInput,
    BaseForm,
    BaseButton,
    BaseRow,
    BaseColumn,
    BaseImage,
  },
  methods: {
    async handleLogin() {
      console.log("do login");
    },
    async handleForgotPassword() {
      console.log("do forgot password");
    },
  },
});
</script>