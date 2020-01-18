require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) =>
{
  const user = await User.findByIdAndUpdate(id, { age } )
  const count = await User.countDocuments({ age })
  return count
}

// updateAgeAndCount( '5e161ca01449a508b2a0e593', 34 ).then((count) =>
// {
//   console.log(count)
// }).catch((e) =>
// {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) =>
{
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed: false})
  return count
}

deleteTaskAndCount('5e178a6252a07f0a37a5dc83').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})