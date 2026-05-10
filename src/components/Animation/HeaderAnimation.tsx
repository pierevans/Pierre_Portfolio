interface Props {
  headline: string;
}

const HeaderAnimation = ({headline}: Props) => {
  const words:string[] = headline.split(" ")

  return (
    <div>
      {words.map((word: string, i:number)=> (
        <h1 key={i}>{word}</h1>
      ))}
    </div>
  )
}

export default HeaderAnimation