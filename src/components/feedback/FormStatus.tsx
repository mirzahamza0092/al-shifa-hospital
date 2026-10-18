type Props = {
  error: string
  success: boolean
  successMessage: string
}

export default function FormStatus({ error, success, successMessage }: Props) {
  if (error) {
    return (
      <p className="rounded-md bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
        {error}
      </p>
    )
  }
  if (success) {
    return (
      <p className="rounded-md bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
        {successMessage}
      </p>
    )
  }
  return null
}