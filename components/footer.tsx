import Switcher from './switcher';

export default function Footer() {
    return (
        <div>
            <div>
            <Switcher />
            </div>
            <footer className="flex flex-1 py-6 items-center justify-center dark:text-slate-300">
                &copy; Jananadi Wedagedara 2022
            </footer>
        </div>
    )
}