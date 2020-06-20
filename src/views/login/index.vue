<template>
  <div class="login-container">
    <Form ref="formLogin" :model="formLogin" :rules="ruleInline">
      <h3 class="title">欢迎登录</h3>
      <FormItem prop="account">
        <Input type="text" v-model="formLogin.account" placeholder="用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="formLogin.password"
          placeholder="密码"
          @keyup.enter.native="handleSubmit"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" style="" @click="handleSubmit">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { getSHA256 } from '@/common/util.js';
export default {
  data() {
    return {
      formLogin: {
        account: '',
        password: ''
      },
      ruleInline: {
        account: [{ required: true, message: 'Please fill in the account name', trigger: 'blur' }],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs['formLogin'].validate(async valid => {
        if (valid) {
          await this.$store.dispatch('user/login', {
            ...this.formLogin,
            password: getSHA256(this.formLogin.password)
          });
          this.$Message.success('Success!');
          this.$router.push({ path: '/' });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;

  form {
    width: 520px;
    margin: 0 auto;
    padding: 160px 35px 0;

    .title {
      font-size: 26px;
      color: #fff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .ivu-btn {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
