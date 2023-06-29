import router from './index'

router.beforeEach((to, from) => {
  console.log(123)

  return true
})
