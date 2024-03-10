interface Props {
  title: string;
  score: string;
}

export const ScoreCard = ({ title, score }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:items-center">
      <div className="text-xl md:text-5xl font-bold text-blue-600">{score}</div>
      <div className="text-xs md:text-xl font-medium">{title}</div>
    </div>
  );
};
