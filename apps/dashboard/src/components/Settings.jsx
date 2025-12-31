import Layout from './Layout';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Settings() {
    const { t, language, changeLanguage } = useLanguage();

    return (
        <Layout>
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Side Menu */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-4 space-y-1">
                        <div className="px-3 py-2">
                            <h3 className="text-xs font-semibold text-[#6b7280] dark:text-[#9cafba] uppercase tracking-wider mb-2">{t.sidebar.settings}</h3>
                        </div>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium transition-colors" href="#">
                            <span className="material-symbols-outlined fill-1">settings</span>
                            <span>{t.settings.title}</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#9cafba] hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
                            <span>{t.settings.account}</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#9cafba] hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">notifications</span>
                            <span>{t.settings.notifications}</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#9cafba] hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors group" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">tune</span>
                            <span>{t.settings.system}</span>
                        </a>
                    </div>
                </aside>

                <main className="flex-1 max-w-3xl space-y-10 pb-20">
                    {/* Page Header */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">{t.settings.title}</h1>
                        <p className="text-[#6b7280] dark:text-[#9cafba] text-lg">{t.settings.subtitle}</p>
                    </div>

                    {/* Section: Regional Settings */}
                    <section className="bg-white dark:bg-[#1b272d] rounded-xl border border-[#e5e7eb] dark:border-[#283339] p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">public</span>
                            </div>
                            <h2 className="text-xl font-bold">{t.settings.regional}</h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Language */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="language">{t.settings.systemLanguage}</label>
                                <div className="relative">
                                    <select
                                        className="w-full rounded-lg bg-slate-50 dark:bg-[#101c22] border border-[#e5e7eb] dark:border-[#283339] text-slate-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        id="language"
                                        value={language}
                                        onChange={(e) => changeLanguage(e.target.value)}
                                    >
                                        <option value="en">English (US)</option>
                                        <option value="id">Bahasa Indonesia</option>
                                    </select>
                                </div>
                                <p className="text-xs text-[#6b7280] dark:text-[#9cafba]">{t.settings.languageDesc}</p>
                            </div>
                            {/* Time Zone */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="timezone">{t.settings.timeZone}</label>
                                <div className="relative">
                                    <select className="w-full rounded-lg bg-slate-50 dark:bg-[#101c22] border border-[#e5e7eb] dark:border-[#283339] text-slate-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="timezone" defaultValue="utc+7">
                                        <option value="utc-7">Pacific Time (US & Canada)</option>
                                        <option value="utc+7">Bangkok, Hanoi, Jakarta</option>
                                        <option value="utc+8">Kuala Lumpur, Singapore</option>
                                    </select>
                                </div>
                                <p className="text-xs text-[#6b7280] dark:text-[#9cafba]">{t.settings.timeZoneDesc}</p>
                            </div>
                        </div>
                    </section>

                    {/* Section: Account Preview */}
                    <section className="bg-white dark:bg-[#1b272d] rounded-xl border border-[#e5e7eb] dark:border-[#283339] p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">manage_accounts</span>
                                </div>
                                <h2 className="text-xl font-bold">{t.settings.account}</h2>
                            </div>
                            <button className="text-sm text-primary font-medium hover:underline">{t.settings.editProfile}</button>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="size-20 rounded-full bg-cover bg-center border-2 border-[#e5e7eb] dark:border-[#283339] bg-surface-dark flex items-center justify-center text-white font-bold text-2xl">
                                        D
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <span className="material-symbols-outlined text-white">camera_alt</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.settings.displayName}</label>
                                            <input className="w-full rounded-lg bg-slate-50 dark:bg-[#101c22] border border-[#e5e7eb] dark:border-[#283339] text-slate-900 dark:text-white h-11 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-[#9cafba]" type="text" defaultValue="Danu" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.settings.email}</label>
                                            <input className="w-full rounded-lg bg-slate-50 dark:bg-[#101c22] border border-[#e5e7eb] dark:border-[#283339] text-slate-900 dark:text-white h-11 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-[#9cafba]" type="email" defaultValue="bagasdanusaputra@gmail.com" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Notifications */}
                    <section className="bg-white dark:bg-[#1b272d] rounded-xl border border-[#e5e7eb] dark:border-[#283339] p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">notifications_active</span>
                            </div>
                            <h2 className="text-xl font-bold">{t.settings.notifications}</h2>
                        </div>
                        <div className="space-y-4">
                            {/* Toggle Item */}
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f5f7f8] dark:hover:bg-[#101c22]/50 transition-colors">
                                <div className="flex flex-col">
                                    <span className="text-base font-medium text-slate-900 dark:text-white">{t.settings.emailAlerts}</span>
                                    <span className="text-sm text-[#6b7280] dark:text-[#9cafba]">{t.settings.emailDesc}</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            {/* Toggle Item */}
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f5f7f8] dark:hover:bg-[#101c22]/50 transition-colors">
                                <div className="flex flex-col">
                                    <span className="text-base font-medium text-slate-900 dark:text-white">{t.settings.criticalAlerts}</span>
                                    <span className="text-sm text-[#6b7280] dark:text-[#9cafba]">{t.settings.criticalDesc}</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            {/* Toggle Item */}
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f5f7f8] dark:hover:bg-[#101c22]/50 transition-colors">
                                <div className="flex flex-col">
                                    <span className="text-base font-medium text-slate-900 dark:text-white">{t.settings.marketing}</span>
                                    <span className="text-sm text-[#6b7280] dark:text-[#9cafba]">{t.settings.marketingDesc}</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Actions Footer */}
                    <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#e5e7eb] dark:border-[#283339]">
                        <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                            {t.settings.cancel}
                        </button>
                        <button className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-sky-500 shadow-lg shadow-primary/25 transition-all transform active:scale-95">
                            {t.settings.save}
                        </button>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
