import { BiLogOut } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"

export function Header() {

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('@reactLinks');
        navigate("/login"); // se estiver usando useNavigate()
    };


    return (
        <header className="w-full max-w-2xl mt-4 px-1">
            <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
                <div className="flex items-center gap-4 font-medium">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/admin">
                        Admin
                    </Link>
                    <Link to="/admin/social">
                        Social
                    </Link>
                </div>
                <button onClick={handleLogout}>
                    <BiLogOut size={28} color="#db2629" />
                </button>
            </nav>
        </header>
    )
}