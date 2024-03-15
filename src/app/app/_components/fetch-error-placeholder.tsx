import Image from 'next/image'

export function FetchErrorPlaceholder() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-primary">Sorry!</h1>
      <p className="text-primary">
        Something went wrong on our side, but we are already fixing it!
        <br />
        Please come back later.
      </p>
      <p></p>
      <Image
        src="/fetch-error.webp"
        alt="pokemon-placeholder"
        width={500}
        height={284}
      />
    </div>
  )
}
