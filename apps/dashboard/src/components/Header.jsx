import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const { t } = useLanguage();

    return (
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
                <h2 className="text-[#111618] dark:text-white text-3xl font-black leading-tight tracking-tight">{t.header.hello}, Danu</h2>
                <p className="text-[#637588] dark:text-[#9cafba] text-base font-normal">{t.header.overview}, <span className="font-medium text-primary">October 24</span>.</p>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-surface-dark border border-[#283339] text-white text-sm font-semibold hover:bg-[#283339] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                    <span>{t.header.refresh}</span>
                </button>
                <button className="flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-[#0b8bcc] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span>{t.header.add}</span>
                </button>
            </div>
        </header>
    );
}
