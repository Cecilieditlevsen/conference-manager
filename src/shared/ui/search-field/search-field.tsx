import type { SearchFieldProps as RASearchFieldProps } from 'react-aria-components'
import {
  Button as RAButton,
  Input as RAInput,
  Label as RALabel,
  SearchField as RASearchField,
  Text as RAText,
} from 'react-aria-components'
import { IconSearch } from '@shared/icons/icon-search.tsx'
import { IconX } from '@shared/icons/icon-x.tsx'
import { tw } from 'twind'

type SearchFieldOwnProps = {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string
}

export type SearchFieldProps = SearchFieldOwnProps & RASearchFieldProps

export function SearchField({
  label,
  placeholder,
  description,
  errorMessage,
  ...props
}: SearchFieldProps) {
  const ErrorOrDescription = () => {
    if (props.isDisabled) return null

    return (
      <div className={tw`text-sm`}>
        {props.isDisabled ? null : props.isInvalid && errorMessage ? (
          <RAText slot={'errorMessage'} className={tw`text-red-500`}>
            {errorMessage}
          </RAText>
        ) : (
          <RAText slot={'description'}>{description}</RAText>
        )}
      </div>
    )
  }

  return (
    <RASearchField {...props}>
      {label ? <RALabel>{label}</RALabel> : null}

      <div className={tw`relative mt-2 mb-2`}>
        <RAInput
          placeholder={placeholder}
          className={tw`h-[50px] sm:h-[60px] w-full px-9 sm:px-12 placeholder::(text-form text-grey-dark) text-form rounded-search-bar border(solid grey-medium 1) focus:(outline-none ring ring-offset-1 ring-primary ring-2)`}
        />

        <IconSearch
          className={tw`w-4 md:w-5 absolute p-0 left-3 sm:left-4 top-1/2 -translate-y-1/2`}
        />

        <RAButton
          className={tw`w-4 md:w-5 absolute p-0 right-3 top-1/2 -translate-y-1/2 mt-0.5`}
        >
          <IconX className={tw`w-5`} />
        </RAButton>
      </div>

      <ErrorOrDescription />
    </RASearchField>
  )
}
