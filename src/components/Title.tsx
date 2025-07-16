interface TitleProps{
  title: string;
  subTitle: string;
}

function Title({title, subTitle}:TitleProps){
  return(
    <>
      <header className="mb-6">
        <h1 className="font-logo text-size-4xl font-bold text-livealone-cal-poly-green leading-10">{title}</h1>
        <h2 className="font-variable text-size-md text-gray-500">{subTitle}</h2>
      </header>
    </>
  )
}

export default Title;