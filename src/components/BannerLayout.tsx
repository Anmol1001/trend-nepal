const BannerLayout = ({children}:any) => {
  return (
    <div className='w-full h-[320px] rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg bg-slate-100'>
        {children}
    </div>
  )
}

export default BannerLayout;