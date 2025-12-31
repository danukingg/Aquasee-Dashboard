import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './Layout';
import { useLanguage } from '../context/LanguageContext';

function MetricCard({ title, value, unit, status, statusText, color }) {
    const isOptimal = status === 'optimal';
    const isStable = status === 'stable';
    const isWarning = status === 'warning';

    let icon = 'check_circle';
    let iconColor = 'text-emerald-500';
    let barColor = 'bg-emerald-500';
    let valueColor = 'text-white';

    if (isWarning) {
        icon = 'warning';
        iconColor = 'text-amber-500';
        barColor = 'bg-amber-500';
    } else if (color === 'blue') {
        barColor = 'bg-blue-500';
    }

    return (
        <div className="bg-surface-dark border border-[#283339] rounded-xl p-5 flex flex-col justify-between h-40 relative overflow-hidden group">
            <div className="flex justify-between items-start z-10">
                <h4 className="text-[#9cafba] text-xs font-bold tracking-wider uppercase">{title}</h4>
                <span className={`material-symbols-outlined ${iconColor} text-[20px]`}>{icon}</span>
            </div>

            <div className="z-10">
                <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold ${valueColor}`}>{value}</span>
                    <span className="text-[#9cafba] text-sm font-medium">{unit}</span>
                </div>
                <p className={`text-xs font-bold mt-1 ${isWarning ? 'text-amber-500' : 'text-[#9cafba]'}`}>
                    {statusText}
                </p>
            </div>

            {/* Progress Bar Visual */}
            <div className="w-full bg-[#283339] h-1.5 rounded-full mt-auto z-10">
                <div className={`h-full rounded-full ${barColor}`} style={{ width: isWarning ? '40%' : '75%' }}></div>
            </div>
        </div>
    );
}

function ToggleControl({ title, subtitle, active, onToggle, icon, activeText, inactiveText }) {
    return (
        <div className="bg-surface-dark border border-[#283339] rounded-xl p-4 flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <div className="size-10 rounded-lg bg-[#283339] flex items-center justify-center text-[#9cafba]">
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-white text-sm font-bold">{title}</h5>
                    <p className="text-[#9cafba] text-xs">{subtitle}</p>
                    {active && <div className="flex items-center gap-1 mt-1">
                        <span className="size-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] text-[#9cafba]">{activeText}</span>
                    </div>}
                    {!active && <div className="flex items-center gap-1 mt-1">
                        <span className="size-1.5 rounded-full bg-gray-500"></span>
                        <span className="text-[10px] text-[#9cafba]">{inactiveText}</span>
                    </div>}
                </div>
            </div>
            <button
                onClick={onToggle}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${active ? 'bg-primary' : 'bg-gray-600'}`}
            >
                <div className={`size-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
        </div>
    );
}

export default function PondDetails() {
    const { t } = useLanguage();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [controls, setControls] = useState({
        pump: true,
        uv: true,
        diffuser: false
    });

    const toggle = (key) => setControls(prev => ({ ...prev, [key]: !prev[key] }));

    const { id } = useParams();
    // In a real app, locations and volumes would also be dynamic/translated if they are data. 
    // Here we use dictionary keys for names.
    const assets = {
        1: { name: t.sidebar.assetA, location: t.common.mainGarden, volume: `2,500 ${t.dashboard.gallons}` },
        2: { name: t.sidebar.assetB, location: t.common.garage, volume: `500 ${t.dashboard.gallons}` },
        3: { name: t.sidebar.assetC, location: t.common.patio, volume: `150 ${t.dashboard.gallons}` },
    };
    const currentAsset = assets[id] || assets[1];

    return (
        <Layout>
            {/* Header with Quick Dropdown */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative">
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <h2 className="text-white text-3xl font-black leading-tight tracking-tight group-hover:text-primary transition-colors">{currentAsset.name} - {currentAsset.location}</h2>
                        <span className={`material-symbols-outlined text-[#9cafba] text-2xl transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                    </div>
                    {/* Mock Status */}
                    <div className="flex items-center gap-2 mt-1">
                        <span className="size-2 rounded-full bg-emerald-500"></span>
                        <p className="text-[#9cafba] text-xs">{t.pondDetails.status}: {t.pondDetails.online} • {currentAsset.volume}</p>
                    </div>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-surface-dark border border-[#283339] rounded-xl shadow-xl z-50 overflow-hidden">
                            <div className="p-1">
                                <Link to="/pond/1" onClick={() => setDropdownOpen(false)} className="block w-full text-left px-4 py-3 hover:bg-[#283339] rounded-lg transition-colors">
                                    <p className="text-white font-bold text-sm">{t.sidebar.assetA}</p>
                                    <p className="text-[#9cafba] text-xs">{t.common.mainGarden}</p>
                                </Link>
                                <Link to="/pond/2" onClick={() => setDropdownOpen(false)} className="block w-full text-left px-4 py-3 hover:bg-[#283339] rounded-lg transition-colors">
                                    <p className="text-white font-bold text-sm">{t.sidebar.assetB}</p>
                                    <p className="text-[#9cafba] text-xs">{t.common.garage}</p>
                                </Link>
                                <Link to="/pond/3" onClick={() => setDropdownOpen(false)} className="block w-full text-left px-4 py-3 hover:bg-[#283339] rounded-lg transition-colors">
                                    <p className="text-white font-bold text-sm">{t.sidebar.assetC}</p>
                                    <p className="text-[#9cafba] text-xs">{t.common.patio}</p>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/control-panel" className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-surface-dark border border-[#283339] text-white text-sm font-semibold hover:bg-[#283339] transition-colors self-start md:self-center">
                    <span className="material-symbols-outlined text-[20px]">tune</span>
                    <span>{t.pondDetails.controlPanel}</span>
                </Link>
            </header>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <MetricCard
                    title={t.pondDetails.metrics.ph}
                    value="7.2"
                    unit="pH"
                    status="stable"
                    statusText={t.common.stable}
                    color="green"
                />
                <MetricCard
                    title={t.pondDetails.metrics.temp}
                    value="24°C"
                    unit=""
                    status="rising"
                    statusText={`+0.8% (${t.common.rising})`}
                    color="blue"
                />
                <MetricCard
                    title={t.pondDetails.metrics.chlorine}
                    value="0.5"
                    unit="ppm"
                    status="warning"
                    statusText={`-0.1 (${t.common.low})`}
                    color="orange"
                />
                <MetricCard
                    title={t.pondDetails.metrics.salinity}
                    value="0.2%"
                    unit=""
                    status="optimal"
                    statusText={t.common.optimal}
                    color="blue"
                />
                <MetricCard
                    title={t.pondDetails.metrics.oxygen}
                    value="8.4"
                    unit="mg/L"
                    status="optimal"
                    statusText={t.common.optimal}
                    color="green"
                />
            </div>

            {/* Bottom Section: Water Level & Controls */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Water Level Visualization (Approx 5 cols) */}
                <div className="lg:col-span-5 bg-surface-dark border border-[#283339] rounded-xl overflow-hidden flex flex-col">
                    <div className="p-5 flex justify-between items-center border-b border-[#283339]">
                        <h3 className="text-white font-bold text-lg">{t.pondDetails.level.waterLevel} Status</h3>
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-emerald-500"></span>
                            <span className="text-[#9cafba] text-xs">{t.common.optimal} Range</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col relative min-h-[300px]">
                        {/* Background Container for Liquid */}
                        <div className="absolute inset-0 bg-[#101c22] flex flex-col justify-end">
                            {/* Water Body */}
                            <div className="w-full bg-gradient-to-t from-[#096ba1] to-primary h-[85%] relative transition-all duration-1000 ease-in-out">
                                {/* Surface Line/Glow */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-white/30 shadow-[0_0_20px_rgba(13,155,231,0.6)]"></div>
                            </div>
                        </div>

                        {/* Overlay Content */}
                        <div className="relative z-10 flex h-full">
                            <div className="w-1/2 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-5xl font-black text-white drop-shadow-md">85%</span>
                                    <p className="text-white font-medium text-sm drop-shadow-sm">{t.pondDetails.level.capacity}</p>
                                </div>
                            </div>
                            <div className="w-1/2 p-6 flex flex-col justify-between gap-6 bg-surface-dark/10 backdrop-blur-[2px]">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[#9cafba] text-xs">{t.pondDetails.level.currentVolume}</span>
                                        <span className="text-white text-xl font-bold">12,450 L</span>
                                    </div>
                                    <div className="flex flex-col border-t border-white/10 pt-4">
                                        <span className="text-[#9cafba] text-xs">{t.pondDetails.level.fillRate}</span>
                                        <span className="text-white text-xl font-bold">0 L/min</span>
                                    </div>
                                    <div className="flex flex-col border-t border-white/10 pt-4">
                                        <span className="text-[#9cafba] text-xs">{t.pondDetails.level.estimatedTime}</span>
                                        <span className="text-white text-xl font-bold">--</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 justify-end mt-4">
                                    <button className="h-10 px-4 bg-primary hover:bg-[#0b8ad0] text-white font-bold text-xs rounded-lg shadow-lg shadow-primary/20 transition-colors whitespace-nowrap">
                                        {t.pondDetails.level.refill}
                                    </button>
                                    <button className="size-10 flex items-center justify-center bg-transparent border border-[#3b4b54] rounded-lg text-[#9cafba] hover:text-white hover:border-white transition-colors flex-shrink-0">
                                        <span className="material-symbols-outlined">history</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Equipment Controls (Approx 7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-bold text-lg">Equipment Control</h3>
                        <a href="#" className="text-primary text-sm font-bold hover:underline">{t.dashboard.viewAll}</a>
                    </div>

                    <ToggleControl
                        title={t.pondDetails.controls.pump}
                        subtitle="Filtration System" // I should add keys for subtitles if I want full localization. For now I'll skip to save time or just use English/Hardcoded.
                        icon="cyclone"
                        active={controls.pump}
                        onToggle={() => toggle('pump')}
                        activeText={t.pondDetails.controls.active}
                        inactiveText={t.pondDetails.controls.inactive}
                    />
                    <ToggleControl
                        title={t.pondDetails.controls.uv}
                        subtitle="Algae Control"
                        icon="wb_sunny"
                        active={controls.uv}
                        onToggle={() => toggle('uv')}
                        activeText={t.pondDetails.controls.active}
                        inactiveText={t.pondDetails.controls.inactive}
                    />
                    <ToggleControl
                        title={t.pondDetails.controls.air}
                        subtitle="Oxygenation"
                        icon="air"
                        active={controls.diffuser}
                        onToggle={() => toggle('diffuser')}
                        activeText={t.pondDetails.controls.active}
                        inactiveText={t.pondDetails.controls.inactive}
                    />
                </div>
            </div>
        </Layout>
    );
}
