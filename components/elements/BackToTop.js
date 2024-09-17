import ScrollToTop from "react-scroll-up";

export default function BackToTop() {
    return (
        <ScrollToTop showUnder={190}>
            <a
                id="scrollUp"
                className="rounded-lg wow animate__animated animate__fadeIn animated hover-up-5 duration-500 p-2"
                style={{ backgroundColor: '#a8a29e' }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            </a>
        </ScrollToTop>
    );
}
