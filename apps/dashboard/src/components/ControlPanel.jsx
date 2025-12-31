import Layout from './Layout';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ControlPanel() {
    const { t } = useLanguage();

    return (
        <Layout>
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 mb-4">
                <a className="text-[#9cafba] text-sm font-medium leading-normal hover:text-white transition-colors" href="/dashboard">{t.sidebar.dashboard}</a>
                <span className="text-[#9cafba] text-sm font-medium leading-normal">/</span>
                <span className="text-white text-sm font-medium leading-normal">{t.controlPanel.title}</span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-center gap-3 pb-6">
                <p className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">{t.controlPanel.title}</p>
                <button className="flex items-center gap-2 bg-[#283339] hover:bg-[#3b4b54] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                    {t.controlPanel.refresh}
                </button>
            </div>

            {/* Manual Control Section */}
            <div className="flex flex-col gap-4 pb-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-white tracking-light text-[24px] font-bold leading-tight">{t.controlPanel.manual}</h2>
                    <span className="text-[#9cafba] text-xs font-medium uppercase tracking-wider">4 {t.controlPanel.online}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card 1: Main Pump */}
                    <div className="@container rounded-xl border border-[#3b4b54] bg-[#1a2126] p-5 shadow-sm hover:border-[#4c5f6b] transition-colors">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#0d9be7]/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">water_drop</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white text-lg font-bold leading-tight">{t.controlPanel.pump}</p>
                                        <p className="text-primary text-sm font-medium leading-normal">{t.controlPanel.running} • 80%</p>
                                    </div>
                                </div>
                                <label className="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-[#283339] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#0d9be7] transition-all duration-300">
                                    <div className="h-[24px] w-[24px] rounded-full bg-white shadow-sm"></div>
                                    <input defaultChecked className="invisible absolute" type="checkbox" />
                                </label>
                            </div>
                            {/* Slider Visualization */}
                            <div className="flex flex-col gap-2 pt-2">
                                <div className="flex justify-between text-xs text-[#9cafba] font-medium">
                                    <span>{t.controlPanel.speed}</span>
                                    <span>2400 RPM</span>
                                </div>
                                <div className="h-2 w-full bg-[#283339] rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[80%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Bottom Drain */}
                    <div className="@container rounded-xl border border-[#3b4b54] bg-[#1a2126] p-5 shadow-sm hover:border-[#4c5f6b] transition-colors">
                        <div className="flex flex-col gap-4 h-full justify-center">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#283339] flex items-center justify-center text-[#9cafba]">
                                        <span className="material-symbols-outlined">remove_circle_outline</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white text-lg font-bold leading-tight">{t.controlPanel.drain}</p>
                                        <p className="text-[#9cafba] text-sm font-normal leading-normal">{t.controlPanel.closed}</p>
                                    </div>
                                </div>
                                <label className="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-[#283339] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#0d9be7] transition-all duration-300">
                                    <div className="h-[24px] w-[24px] rounded-full bg-white shadow-sm"></div>
                                    <input className="invisible absolute" type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: UV Clarifier */}
                    <div className="@container rounded-xl border border-[#3b4b54] bg-[#1a2126] p-5 shadow-sm hover:border-[#4c5f6b] transition-colors">
                        <div className="flex flex-col gap-4 h-full justify-center">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#0d9be7]/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">lightbulb</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white text-lg font-bold leading-tight">{t.controlPanel.uv}</p>
                                        <p className="text-primary text-sm font-medium leading-normal">{t.controlPanel.active}</p>
                                    </div>
                                </div>
                                <label className="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-[#283339] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#0d9be7] transition-all duration-300">
                                    <div className="h-[24px] w-[24px] rounded-full bg-white shadow-sm"></div>
                                    <input defaultChecked className="invisible absolute" type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Auto Feeder */}
                    <div className="@container rounded-xl border border-[#3b4b54] bg-[#1a2126] p-5 shadow-sm hover:border-[#4c5f6b] transition-colors">
                        <div className="flex flex-col gap-4 h-full justify-center">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#283339] flex items-center justify-center text-[#9cafba]">
                                        <span className="material-symbols-outlined">set_meal</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white text-lg font-bold leading-tight">{t.controlPanel.feeder}</p>
                                        <p className="text-[#9cafba] text-sm font-normal leading-normal">{t.controlPanel.lastFed}: 4h ago</p>
                                    </div>
                                </div>
                                <button className="bg-[#283339] hover:bg-primary hover:text-white text-[#9cafba] px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                    {t.controlPanel.trigger}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Automation & Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
                {/* Automation Schedule */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-white text-[20px] font-bold leading-tight">{t.controlPanel.automation}</h2>
                        <button className="text-primary text-sm font-medium flex items-center gap-1 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            {t.controlPanel.addRule}
                        </button>
                    </div>
                    <div className="flex flex-col rounded-xl border border-[#3b4b54] bg-[#1a2126] overflow-hidden">
                        {/* Rule Item */}
                        <div className="flex items-center justify-between p-4 border-b border-[#283339] hover:bg-[#283339]/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#283339] p-2 rounded-lg text-white">
                                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">{t.controlPanel.morning}</p>
                                    <p className="text-[#9cafba] text-xs">Pump to 100% at 08:00 AM</p>
                                </div>
                            </div>
                            <label className="relative flex h-[20px] w-[36px] cursor-pointer items-center rounded-full border-none bg-[#283339] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#0d9be7] transition-all duration-300">
                                <div className="h-[16px] w-[16px] rounded-full bg-white shadow-sm"></div>
                                <input defaultChecked className="invisible absolute" type="checkbox" />
                            </label>
                        </div>
                        {/* Rule Item */}
                        <div className="flex items-center justify-between p-4 border-b border-[#283339] hover:bg-[#283339]/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#283339] p-2 rounded-lg text-white">
                                    <span className="material-symbols-outlined text-[20px]">dark_mode</span>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">{t.controlPanel.night}</p>
                                    <p className="text-[#9cafba] text-xs">UV Off at 08:00 PM</p>
                                </div>
                            </div>
                            <label className="relative flex h-[20px] w-[36px] cursor-pointer items-center rounded-full border-none bg-[#283339] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#0d9be7] transition-all duration-300">
                                <div className="h-[16px] w-[16px] rounded-full bg-white shadow-sm"></div>
                                <input defaultChecked className="invisible absolute" type="checkbox" />
                            </label>
                        </div>
                        {/* Rule Item */}
                        <div className="flex items-center justify-between p-4 hover:bg-[#283339]/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#283339] p-2 rounded-lg text-white">
                                    <span className="material-symbols-outlined text-[20px]">restaurant</span>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">{t.controlPanel.midday}</p>
                                    <p className="text-[#9cafba] text-xs">Dispense 50g at 12:00 PM</p>
                                </div>
                            </div>
                            <label className="relative flex h-[20px] w-[36px] cursor-pointer items-center rounded-full border-none bg-[#283339] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#0d9be7] transition-all duration-300">
                                <div className="h-[16px] w-[16px] rounded-full bg-white shadow-sm"></div>
                                <input className="invisible absolute" type="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Activity Log */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-white text-[20px] font-bold leading-tight">{t.controlPanel.activity}</h2>
                        <a className="text-[#9cafba] text-sm font-medium hover:text-white transition-colors" href="#">{t.controlPanel.viewAll}</a>
                    </div>
                    <div className="flex flex-col rounded-xl border border-[#3b4b54] bg-[#1a2126] p-4 gap-4">
                        <div className="flex gap-4 items-start">
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <div className="w-px h-full bg-[#283339] my-1 min-h-[20px]"></div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <p className="text-white text-sm font-medium">System: Auto-feed triggered</p>
                                <p className="text-[#9cafba] text-xs">2 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-[#9cafba] mt-2"></div>
                                <div className="w-px h-full bg-[#283339] my-1 min-h-[20px]"></div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <p className="text-white text-sm font-medium">User: Pump speed set to 80%</p>
                                <p className="text-[#9cafba] text-xs">15 minutes ago • Danu</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-[#9cafba] mt-2"></div>
                                <div className="w-px h-full bg-[#283339] my-1 min-h-[20px]"></div>
                            </div>
                            <div className="flex flex-col pb-2">
                                <p className="text-white text-sm font-medium">System: Morning Cycle Started</p>
                                <p className="text-[#9cafba] text-xs">4 hours ago</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-[#9cafba] mt-2"></div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-sm font-medium">User: UV Clarifier Enabled</p>
                                <p className="text-[#9cafba] text-xs">Yesterday at 6:30 PM • Danu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Spacer */}
            <div className="h-10"></div>
        </Layout>
    );
}
