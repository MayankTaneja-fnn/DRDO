import image from "../../public/DRDO_icon.png"


function Header() {
  return (
    <div>
        <div className="w-screen h-72">
            <div className="flex items-center w-full h-40 bg-blue-900">
                <div>
                    <img src={image}/>
                </div>
                <div>
                    Solid State Physics
                </div>
                <div>
                    <input/>
                </div>
            </div>
            <div>
                <div>
                    <div>

                    </div>
                    <div>
                        Board index
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        Login
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header