export default function SideBar() {
  return (
      <div className="flex flex-col justify-between gap-6 p-3 border-r-gray-800 border-r">

        <div className="navigation flex flex-col gap-3">
          <div className="menu-item">
            <a className="menu-link" href="">
              <i className="fas fa-home"></i>
              Home
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="">
              <i className="fas fa-spaceship"></i>
              Discover
            </a>
          </div>

          <div className="pt-4 font-bold text-gray-400">YOUR STUFF</div>
          <div className="menu-item flex flex-col gap-3">
            <a className="menu-link" href="">
              <i className="fas fa-stack"></i>
              My Queue
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="">
              <i className="fas fa-squares"></i>
              My Podcasts
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="">
              <i className="fas fa-clock"></i>
              Recents
            </a>
          </div>
          <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background "
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            get data
          </a>
        </div>

        <div className="footer  text-gray-500 text-sm">
          podcast app, By <a className="hover:underline" href="https://x.com/i3asmDev">i3asmDev</a>/
          <div className="flex gap-3">
            <a className="hover:underline" href="#">About</a>
            <a className="hover:underline" href="#">All Podcasts</a>
          </div>
        </div>
      </div>
  );
}
