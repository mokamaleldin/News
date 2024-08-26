const Footer = () => {
    return (
        <footer className="flex justify-between items-center px-16 py-5 mt-10 bg-mkee2 font-bold text-main">

            <nav className="font-bold text-xl">
                Mkee News 
            </nav>
            <nav className="flex justify-center items-center gap-6">
                <a href="https://www.instagram.com/mokamaleldin_">
                    <img src="./instagram.png" alt="instagram" width={40} height={40} />
                </a>
                <a href="https://www.linkedin.com/in/mokamaleldin">
                    <img src="./linkedin.png" alt="instagram" width={40} height={40} />
                </a>
                <a href="https://www.tiktok.com/@mokamaleldin">
                    <img src="./tiktok.png" alt="instagram" width={40} height={40} />
                </a>
                <a href="https://www.youtube.com/@mokamaleldin">
                    <img src="./youtube.png" alt="instagram" width={40} height={40} />
                </a>
            </nav>
        </footer>
    )
}
export default Footer