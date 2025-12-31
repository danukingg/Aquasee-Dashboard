import Logo from './Logo';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Sidebar({ isOpen, onClose }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [pondsOpen, setPondsOpen] = useState(false);
    const [analysisOpen, setAnalysisOpen] = useState(false);
    const { t } = useLanguage();

    const NavItem = ({ to, icon, label, active }) => (
        <Link
            to={to}
            onClick={onClose} // Close sidebar on nav click (mobile)
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${active
                ? 'bg-primary/10 border-l-4 border-primary'
                : 'text-[#9cafba] hover:bg-[#283339] hover:text-white border-l-4 border-transparent'
                }`}
        >
            <span className={`material-symbols-outlined ${active ? 'text-primary' : ''}`}>{icon}</span>
            <p className={`${active ? 'text-white font-semibold' : 'font-medium'} text-sm`}>{label}</p>
        </Link>
    );

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-50
                flex flex-col w-64 h-full bg-background-dark border-r border-[#283339] flex-shrink-0 transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex flex-col h-full p-4 relative">
                    {/* Close Button (Mobile Only) */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 lg:hidden text-[#9cafba] hover:text-white"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    {/* Branding */}
                    <div className="flex items-center gap-3 px-2 py-4 mb-6">
                        <Logo className="size-10 shadow-lg shadow-primary/20 rounded-full" />
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold leading-tight tracking-tight">Aquasee</h1>
                            <p className="text-[#9cafba] text-xs font-medium">v2.4.1</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar">
                        <NavItem to="/dashboard" icon="dashboard" label={t.sidebar.dashboard} active={isActive('/dashboard')} />

                        {/* My Assets Dropdown Group */}
                        <div>
                            <button
                                onClick={() => setPondsOpen(!pondsOpen)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${isActive('/pond/1') || isActive('/pond/2') || isActive('/pond/3')
                                    ? 'bg-transparent'
                                    : 'text-[#9cafba] hover:bg-[#283339] hover:text-white'
                                    } ${isActive('/pond/1') || isActive('/pond/2') || isActive('/pond/3') ? 'text-white' : ''}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`material-symbols-outlined ${isActive('/pond/1') || isActive('/pond/2') || isActive('/pond/3') ? 'text-primary' : 'text-[#9cafba]'} group-hover:text-white`}>water_drop</span>
                                    <p className={`text-sm ${isActive('/pond/1') || isActive('/pond/2') || isActive('/pond/3') ? 'font-semibold' : 'font-medium'}`}>{t.sidebar.myAssets}</p>
                                </div>
                                <span className={`material-symbols-outlined text-[18px] text-[#9cafba] transition-transform duration-200 ${pondsOpen ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${pondsOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-col gap-1 pl-3 border-l border-[#283339] ml-6">
                                    <Link to="/pond/1" onClick={onClose} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/pond/1') ? 'text-primary font-semibold bg-primary/5' : 'text-[#9cafba] hover:text-white'}`}>
                                        <span>{t.sidebar.assetA}</span>
                                    </Link>
                                    <Link to="/pond/2" onClick={onClose} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/pond/2') ? 'text-primary font-semibold bg-primary/5' : 'text-[#9cafba] hover:text-white'}`}>
                                        <span>{t.sidebar.assetB}</span>
                                    </Link>
                                    <Link to="/pond/3" onClick={onClose} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/pond/3') ? 'text-primary font-semibold bg-primary/5' : 'text-[#9cafba] hover:text-white'}`}>
                                        <span>{t.sidebar.assetC}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Analysis Dropdown Group */}
                        <div>
                            <button
                                onClick={() => setAnalysisOpen(!analysisOpen)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${isActive('/analysis/1') || isActive('/analysis/2') || isActive('/analysis/3')
                                    ? 'bg-transparent'
                                    : 'text-[#9cafba] hover:bg-[#283339] hover:text-white'
                                    } ${isActive('/analysis/1') || isActive('/analysis/2') || isActive('/analysis/3') ? 'text-white' : ''}`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`material-symbols-outlined ${isActive('/analysis/1') || isActive('/analysis/2') || isActive('/analysis/3') ? 'text-primary' : 'text-[#9cafba]'} group-hover:text-white`}>show_chart</span>
                                    <p className={`text-sm ${isActive('/analysis/1') || isActive('/analysis/2') || isActive('/analysis/3') ? 'font-semibold' : 'font-medium'}`}>{t.sidebar.analysis}</p>
                                </div>
                                <span className={`material-symbols-outlined text-[18px] text-[#9cafba] transition-transform duration-200 ${analysisOpen ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${analysisOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-col gap-1 pl-3 border-l border-[#283339] ml-6">
                                    <Link to="/analysis/1" onClick={onClose} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/analysis/1') ? 'text-primary font-semibold bg-primary/5' : 'text-[#9cafba] hover:text-white'}`}>
                                        <span>{t.sidebar.assetA}</span>
                                    </Link>
                                    <Link to="/analysis/2" onClick={onClose} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/analysis/2') ? 'text-primary font-semibold bg-primary/5' : 'text-[#9cafba] hover:text-white'}`}>
                                        <span>{t.sidebar.assetB}</span>
                                    </Link>
                                    <Link to="/analysis/3" onClick={onClose} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/analysis/3') ? 'text-primary font-semibold bg-primary/5' : 'text-[#9cafba] hover:text-white'}`}>
                                        <span>{t.sidebar.assetC}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <NavItem to="/settings" icon="settings" label={t.sidebar.settings} active={isActive('/settings')} />
                    </nav>

                    {/* User Profile */}
                    <div className="mt-auto border-t border-[#283339] pt-4">
                        <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg hover:bg-[#283339] transition-colors">
                            <div className="size-9 rounded-full bg-surface-dark flex items-center justify-center text-white font-bold border border-[#283339]">
                                D
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-white text-sm font-medium">Danu</p>
                                <p className="text-[#9cafba] text-xs">{t.sidebar.admin}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
