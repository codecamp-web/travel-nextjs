

type Props = {
    heading: string
    subheading: string
}

const Heading = ({heading, subheading}: Props) => {
  return (
    <div>
      <h1 className="mt-2 text-green-400 font-bold text-xl sm:text-2xl font-mono">
        {heading}
      </h1>
      <p className="pt-2 text-gray-400 sm:text-base text-sm font-medium">
        {subheading}
      </p>
    </div>
  )
}

export default Heading
