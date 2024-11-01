export default function Button({ button }: { button: { text: any, img: any, link: any } }) {
  return (
    <div onClick={() => window.open(button.link, "_self")} className="flex flex-col w-[150px] select-none items-center cursor-pointer hover:scale-95 h-fit text-transparent hover:text-white">
      <img className="rounded-[48px]" width={150} src={button.img} />
      <div className="hidden md:block text-4xl font-semibold relative top-4">
        {button.text}
      </div>
    </div>
  )
}