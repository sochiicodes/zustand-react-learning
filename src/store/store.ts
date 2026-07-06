
import { create } from "zustand"
import { createUserSlice } from "./user-slice"
import type { Store } from "@/types/store"
import { immer } from "zustand/middleware/immer"
import { createCartSlice } from "./cart-slice"
import { devtools, persist, subscribeWithSelector } from "zustand/middleware"
import { createTaskSlice } from "./task-slice"

export const useStore = create<Store>()(
    devtools(
        persist(
            subscribeWithSelector(immer((...a) => ({
                ...createUserSlice(...a),
                ...createCartSlice(...a),
                ...createTaskSlice,
                }))
            ),{
                name: 'local-storage'
            }
        )
    )
)

