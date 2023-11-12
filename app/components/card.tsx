const Card = (props: {children: React.ReactNode, className?: string}) => {

  return (
    <div className={`border border-slate-400 border-opacity-30 bg-slate-200 bg-opacity-20 mt-3 rounded-md text-white p-3 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card