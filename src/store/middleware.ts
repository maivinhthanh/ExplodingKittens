import { devtools, persist } from "zustand/middleware";

const middlewares = (f: any) => devtools(persist(f, { name: 'authStore' }))

export default middlewares;