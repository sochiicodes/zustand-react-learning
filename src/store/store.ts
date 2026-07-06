
import { create } from "zustand"
import { createUserSlice } from "./use-slice"
import type { Store } from "@/types/store"
import { immer } from "zustand/middleware/immer"
import { createCartSlice } from "./cart-slice"
import { devtools, persist, subscribeWithSelector } from "zustand/middleware"

export const useStore = create<Store>()(
    devtools(
        persist(
            subscribeWithSelector(immer((...a) => ({
                ...createUserSlice(...a),
                ...createCartSlice(...a)
                }))
            ),{
                name: 'local-storage'
            }
        )
    )
)