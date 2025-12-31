import Sidebar from './Sidebar';
import { useState } from 'react';
import Logo from './Logo';

export default function Layout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative flex h-screen w-full overflow-hidden">
            <Sidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

            <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between p-4 bg-surface-dark border-b border-[#283339] flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <Logo className="size-8 shadow-lg shadow-primary/20 rounded-full" />
                        <span className="text-white font-bold text-lg">Aquasee</span>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2 text-white hover:bg-[#283339] rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto">
                    <div className="max-w-[1400px] mx-auto p-4 md:p-6 lg:p-10 flex flex-col gap-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
