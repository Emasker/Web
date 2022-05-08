<template>
<div>
  <School></School>
  <Student></Student>
  </div>
</template>

<script>
import Student from './Student'
import School from './School'
export default {
    name:'App',
    components:{
        School,
        Student
    }
}
</script>
