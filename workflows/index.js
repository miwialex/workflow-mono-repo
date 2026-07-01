import { task } from "@renderinc/sdk/workflows"

task(
  { name: 'test' }, 
  () => {
    return 'testing1!!'
  }
)