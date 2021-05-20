import { ref } from "vue";



export const loginUser = ref({
  email:"",
  password:"",
});

 // 校验规则
export const rules = ref( {
  email: [{
      type:"email",
      message:"邮箱输入不正确...",
      required: true,
      trigger: 'blur' 
    }],
  password: [{

      required:true,
      message:"密码不能为空...",
      trigger: 'blur' 
  },
  {
    min:6,
    max:30,
    message:"密码长度不能小于6位",
    trigger: 'blur'
  }],
  
})