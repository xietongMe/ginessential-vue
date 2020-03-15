<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-card title="注册">
          <b-form>
            <b-form-group label="姓名">
              <b-form-input v-model="$v.user.name.$model" type="text" placeholder="输入您的昵称（选填）"></b-form-input>
            </b-form-group>
            <b-form-group label="手机">
              <b-form-input
                v-model="$v.user.telephone.$model"
                type="number"
                placeholder="输入您的电话（必填）"
                :state="validateState('telephone')"
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('telephone')">手机号不符合要求</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="密码">
              <b-form-input
                v-model="$v.user.password.$model"
                type="password"
                placeholder="输入您的密码（必填）"
                :state="validateState('password')"
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('password')">密码必须大于等于6位</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group>
              <b-button @click="register" variant="outline-primary" block>注册</b-button>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import customValidator from '@/helper/validator';

export default {
  data() {
    return {
      user: {
        name: '',
        telephone: '',
        password: '',
      },
      validations: null,
    };
  },
  validations: {
    user: {
      name: {},
      telephone: {
        required,
        telephone: customValidator.telephoneValidate,
      },
      password: {
        required,
        minLength: minLength(6),
      },

    },
  },
  methods: {
    validateState(name) {
      // es6解构赋值 当与表单交互时$dirty变为true，刚开始初始化时为false
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    register() {
      // 验证数据
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      const api = 'http://localhost:1060/api/auth/register';
      this.axios.post(api, { ...this.user }).then((res) => {
        // 保存token
        console.log(res.token);
        // 保存token
        localStorage.setItem('token', res.data.data.token);
        // 跳转主页
        this.$router.replace({ name: 'Home' });
      }).catch((err) => {
        // console.log('err', err.response.data.msg);
        this.$bvToast.toast(err.response.data.msg, {
          title: '数据验证错误',
          variant: 'danger',
          solid: true,
        });
      });
    },
  },
};
</script>
