interface Props {
  skills: string[];
  className?: string;
}
const SkillsCard = (props: Props) => {
  const { skills, className } = props;

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {skills.map((item, index) => (
        <div key={index} className="px-1.5 pb-0.5 h-fit text-xs rounded-md bg-gray-500">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
