import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TypeRootState } from '@/store/rootReducer'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
