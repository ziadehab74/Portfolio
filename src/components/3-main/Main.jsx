import './main.css'
export default function Main() {
  return (
    <main className='flex'>
      <div className='flex left-section '>
        <button>All projects</button>
        <button>HTML & CSS</button>
        <button>Laravel</button>
        <button>React</button>
      </div>
      <div className='right-serction'>
        <article className='card borer'>
          <img  width={400} src="/public/1.jpg" alt="" />
          <div style={{width:"266px"}} className="box ">
            <h1 className='title'>Title</h1>
            <p className='sub-title'>
              hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </p>
            <div className="flex icons">
            <div style={{gap:"11px"}} className='flex'>
            <div className="icon-link"></div>
            <div className="icon-github"></div>              
            </div>
              <a className="link flex" href="">
                more
                <div style={{alignSelf:"end"}} className="icon-arrow-right2"></div>
              </a>
            </div>
          </div>
        </article>

      </div>
    </main>
  )
}
