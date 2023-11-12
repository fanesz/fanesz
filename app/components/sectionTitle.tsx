const SectionTitle = (props: { text: string }) => {

  return (
    <div className="w-fit text-xl font-semibold mb-2 text-white">
      {props.text}
      <div className="border-b-4 border-gray-400 rounded" />
    </div>
  )
}

export default SectionTitle