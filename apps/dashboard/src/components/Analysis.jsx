import Layout from './Layout';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Analysis() {
    const { t } = useLanguage();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { id } = useParams();
    const assets = {
        1: { name: t.sidebar.assetA, location: t.common.mainGarden },
        2: { name: t.sidebar.assetB, location: t.common.garage },
        3: { name: t.sidebar.assetC, location: t.common.patio },
    };
    const currentAsset = assets[id] || assets[1];

    return (
        <Layout>
            {/* Page Heading & Controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                <div className="flex flex-col gap-2 relative">
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t.analysis.title} - {currentAsset.name}</h1>
                        <span className={`material-symbols-outlined text-slate-900 dark:text-white text-3xl transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                    </div>
                    <p className="text-slate-500 dark:text-[#9cafba]">{t.analysis.subtitle} {currentAsset.location}</p>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-surface-dark border border-[#283339] rounded-xl shadow-xl z-50 overflow-hidden">
                            <div className="p-1">
                                <Link to="/analysis/1" onClick={() => setDropdownOpen(false)} className="block w-full text-left px-4 py-3 hover:bg-[#283339] rounded-lg transition-colors">
                                    <p className="text-white font-bold text-sm">{t.sidebar.assetA}</p>
                                    <p className="text-[#9cafba] text-xs">{t.common.mainGarden}</p>
                                </Link>
                                <Link to="/analysis/2" onClick={() => setDropdownOpen(false)} className="block w-full text-left px-4 py-3 hover:bg-[#283339] rounded-lg transition-colors">
                                    <p className="text-white font-bold text-sm">{t.sidebar.assetB}</p>
                                    <p className="text-[#9cafba] text-xs">{t.common.garage}</p>
                                </Link>
                                <Link to="/analysis/3" onClick={() => setDropdownOpen(false)} className="block w-full text-left px-4 py-3 hover:bg-[#283339] rounded-lg transition-colors">
                                    <p className="text-white font-bold text-sm">{t.sidebar.assetC}</p>
                                    <p className="text-[#9cafba] text-xs">{t.common.patio}</p>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    {/* Time Range Selector */}
                    <div className="relative group">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                        </span>
                        <select className="appearance-none pl-10 pr-10 py-2.5 h-12 bg-white dark:bg-[#1b2327] border border-slate-300 dark:border-[#3b4b54] rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer min-w-[160px]">
                            <option>{t.analysis.ranges.day}</option>
                            <option>{t.analysis.ranges.week}</option>
                            <option>{t.analysis.ranges.month}</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            <span className="material-symbols-outlined text-[20px]">expand_more</span>
                        </span>
                    </div>
                    {/* Export Button */}
                    <button className="flex items-center justify-center gap-2 h-12 px-5 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-500/20">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        <span>{t.analysis.export}</span>
                    </button>
                </div>
            </div>

            {/* Parameter Switcher */}
            <div className="border-b border-slate-200 dark:border-[#283339] mb-6">
                <div className="flex gap-6 overflow-x-auto pb-1 no-scrollbar">
                    <button className="pb-3 px-1 border-b-2 border-primary text-primary font-semibold text-base whitespace-nowrap">
                        {t.pondDetails.metrics.ph}
                    </button>
                    <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-[#9cafba] hover:text-slate-700 dark:hover:text-white font-medium text-base transition-colors whitespace-nowrap">
                        {t.pondDetails.metrics.temp}
                    </button>
                    <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-[#9cafba] hover:text-slate-700 dark:hover:text-white font-medium text-base transition-colors whitespace-nowrap">
                        {t.pondDetails.metrics.oxygen}
                    </button>
                    <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-[#9cafba] hover:text-slate-700 dark:hover:text-white font-medium text-base transition-colors whitespace-nowrap">
                        {t.pondDetails.metrics.salinity}
                    </button>
                    <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 dark:text-[#9cafba] hover:text-slate-700 dark:hover:text-white font-medium text-base transition-colors whitespace-nowrap">
                        {t.pondDetails.metrics.chlorine}
                    </button>
                </div>
            </div>

            {/* Main Grid: Chart + Stats */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8">
                {/* Chart Section */}
                <div className="xl:col-span-9 flex flex-col gap-4">
                    <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#283339] shadow-sm min-h-[400px] flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.pondDetails.metrics.ph} Trends</h3>
                                <p className="text-xs text-slate-500 dark:text-[#9cafba]">Measured in pH units</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                                <span className="text-xs text-slate-500 dark:text-[#9cafba]">{currentAsset.name}</span>
                            </div>
                        </div>
                        {/* Visual Chart Mockup */}
                        <div className="flex-1 w-full relative group">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400 dark:text-[#5e717d] pointer-events-none pb-6 pl-8">
                                <div className="flex w-full border-b border-dashed border-slate-100 dark:border-[#283339] h-full items-start"><span className="-ml-8">9.0</span></div>
                                <div className="flex w-full border-b border-dashed border-slate-100 dark:border-[#283339] h-full items-start"><span className="-ml-8">8.5</span></div>
                                <div className="flex w-full border-b border-dashed border-slate-100 dark:border-[#283339] h-full items-start"><span className="-ml-8">8.0</span></div>
                                <div className="flex w-full border-b border-dashed border-slate-100 dark:border-[#283339] h-full items-start"><span className="-ml-8">7.5</span></div>
                                <div className="flex w-full border-b border-dashed border-slate-100 dark:border-[#283339] h-full items-start"><span className="-ml-8">7.0</span></div>
                            </div>
                            {/* Chart SVG */}
                            <div className="absolute inset-0 pb-6 pl-8">
                                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#0d9be7" stopOpacity="0.2"></stop>
                                            <stop offset="100%" stopColor="#0d9be7" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    {/* Area */}
                                    <path d="M0,300 L0,150 Q100,100 200,180 T400,160 T600,120 T800,140 T1000,100 L1000,300 Z" fill="url(#chartGradient)"></path>
                                    {/* Line */}
                                    <path d="M0,150 Q100,100 200,180 T400,160 T600,120 T800,140 T1000,100" fill="none" stroke="#0d9be7" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                                    {/* Interactive Point (Mockup) */}
                                    <circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" cx="600" cy="120" fill="#101c22" r="6" stroke="#0d9be7" strokeWidth="3"></circle>
                                </svg>
                                {/* Tooltip (Mockup) */}
                                <div className="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                    <div className="bg-slate-800 text-white text-xs rounded px-2 py-1 shadow-xl whitespace-nowrap">
                                        7.8 pH • 14:00 PM
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                                    </div>
                                </div>
                            </div>
                            {/* X Axis Labels */}
                            <div className="absolute bottom-0 left-0 right-0 pl-8 flex justify-between text-xs text-slate-400 dark:text-[#5e717d]">
                                <span>00:00</span>
                                <span>04:00</span>
                                <span>08:00</span>
                                <span>12:00</span>
                                <span>16:00</span>
                                <span>20:00</span>
                                <span>23:59</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Sidebar */}
                <div className="xl:col-span-3 flex flex-col gap-4">
                    {/* Stat Card 1 */}
                    <div className="flex flex-col p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#283339] shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">functions</span>
                            <span className="text-sm font-medium text-slate-500 dark:text-[#9cafba]">Average {t.pondDetails.metrics.ph}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-slate-900 dark:text-white">7.2</span>
                            <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+0.1</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">{t.common.optimal} range: 6.5 - 8.5</p>
                    </div>
                    {/* Stat Card 2 */}
                    <div className="flex flex-col p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#283339] shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-blue-400 text-[20px]">vertical_align_bottom</span>
                            <span className="text-sm font-medium text-slate-500 dark:text-[#9cafba]">Min Recorded</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-slate-900 dark:text-white">6.8</span>
                            <span className="text-xs text-slate-500 dark:text-[#9cafba]">at 04:30 AM</span>
                        </div>
                    </div>
                    {/* Stat Card 3 */}
                    <div className="flex flex-col p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#283339] shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-orange-400 text-[20px]">vertical_align_top</span>
                            <span className="text-sm font-medium text-slate-500 dark:text-[#9cafba]">Max Recorded</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-slate-900 dark:text-white">7.9</span>
                            <span className="text-xs text-slate-500 dark:text-[#9cafba]">at 14:15 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Data Table */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t.controlPanel.activity}</h2> {/* Using Activity Log key or create Recent Data key? activity log is close enough or use Activity Log translation, but Analysis says Recent Logs. I can reuse 'activity' or add 'recentLogs'. I'll reuse or just leave hardcoded if I want to save time, but user wants full localization. I'll use `t.controlPanel.activity` which is "Activity Log" / "Log Aktivitas". Analysis says "Recent Logs". "Log Aktivitas" is decent. */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#283339]">
                    <table className="w-full text-left text-sm text-slate-500 dark:text-[#9cafba]">
                        <thead className="bg-slate-50 dark:bg-[#1b2327] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#283339]">
                            <tr>
                                <th className="px-6 py-4 font-semibold" scope="col">Timestamp</th>
                                <th className="px-6 py-4 font-semibold" scope="col">Value (pH)</th>
                                <th className="px-6 py-4 font-semibold" scope="col">{t.pondDetails.status}</th>
                                <th className="px-6 py-4 font-semibold" scope="col">Sensor ID</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-[#283339] bg-white dark:bg-surface-dark">
                            {[
                                { time: "Oct 24, 14:00", val: "7.8", status: "Normal" },
                                { time: "Oct 24, 13:00", val: "7.6", status: "Normal" },
                                { time: "Oct 24, 12:00", val: "7.5", status: "Normal" },
                                { time: "Oct 24, 11:00", val: "7.3", status: "Normal" },
                                { time: "Oct 24, 10:00", val: "7.2", status: "Normal" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-[#1b2327]/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{row.time}</td>
                                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.val}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs">SNS-001-A</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer spacer */}
            <div className="h-10"></div>
        </Layout>
    );
}
