<template>
  <div>
      <h2 ref="hi">欢迎</h2>
        <h2>学生姓名：{{studentName}}</h2>
            <h2>学生年龄：{{age}}</h2>
            <button @click="show">点击</button>
        </div>
</template>

<script>
export default {
    name:'Student',
       data() {
            return {
                studentName: 'breeze',
                age: 18,
            }
        },
        methods: {
            show(){
                console.log(this.$refs.hi);
            }
        },
}
</script>
