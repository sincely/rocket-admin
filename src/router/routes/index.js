const modules = import.meta.glob('./*.js', { eager: true })
const routes = []

Object.keys(modules).forEach((key) => {
  const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  if (name !== 'index') {
    routes.push(...modules[key].default)
  }
})
console.log('项目所有静态routes', routes)
export default routes
