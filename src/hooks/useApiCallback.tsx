import * as React from "react"
import { handleError } from "@jetkit/react"
import { debounce } from "lodash"

interface IUseApiCallbackParams {
  debounceDelay?: number
  onError?: Function
  rethrowError?: boolean
}

/**
 * A wrapper for React.useCallback with some utilities
 * @param cb - The actual callback that might throw an error
 * @param deps - Dependencies for that callback
 * @param options - Custom options (debounce,  onError callback, rethrowing errors etc
 */

export function useAPICallback<T extends (...args: any[]) => any>(
  cb: T,
  deps: React.DependencyList,
  options?: IUseApiCallbackParams
) {
  const { debounceDelay, onError, rethrowError } = options || {}

  const callback = async (...args: any[]): Promise<any> => {
    try {
      return await cb(...args)
    } catch (err) {
      handleError(err)

      onError && onError()

      if (rethrowError) throw err
    }
  }

  return React.useCallback(debounceDelay ? debounce(callback, debounceDelay) : callback, deps)
}
