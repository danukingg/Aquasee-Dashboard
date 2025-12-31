import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function PondCard({ title, location, status, volume, data, sparkline }) {
    const { t } = useLanguage();
    // Expect status to be 'healthy' or 'warning' (lowercase code)
    const isHealthy = status === 'healthy';

    // Status display logic
    const statusColor = isHealthy ? 'text-emerald-500' : 'text-amber-500';
    const statusBg = isHealthy ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-amber-500/10 border-amber-500/20';
    const statusIcon = isHealthy ? <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> : <span className="material-symbols-outlined text-[14px]">warning</span>;
    // Translate status text
    const statusText = isHealthy ? t.common.healthy : t.common.warning;

    // Button logic
    const buttonText = isHealthy ? t.common.viewDetails : t.common.investigate;
    const detailLink = isHealthy ? '/pond/1' : '/pond/2';

    return (
        <div className="flex flex-col rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#283339] p-5 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <h4 className="text-[#111618] dark:text-white text-lg font-bold">{title}</h4>
                    <p className="text-[#637588] dark:text-[#9cafba] text-xs">{location} • {volume}</p>
                </div>
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border ${statusBg} ${statusColor} text-xs font-bold uppercase tracking-wide`}>
                    {statusIcon}
                    {statusText}
                </span>
            </div>

            {/* Mini Sparkline Area */}
            <div className="h-16 w-full mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {sparkline}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4 border-t border-gray-100 dark:border-[#283339] pt-4">
                <div className="flex flex-col">
                    <span className="text-[#637588] dark:text-[#9cafba] text-xs font-medium">{t.dashboard.temp}</span>
                    <span className={`text-base font-bold ${!isHealthy && data.tempWarning ? 'text-amber-500' : 'text-[#111618] dark:text-white'}`}>{data.temp}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#637588] dark:text-[#9cafba] text-xs font-medium">{t.dashboard.ph}</span>
                    <span className={`text-base font-bold ${!isHealthy && data.phWarning ? 'text-amber-500' : 'text-[#111618] dark:text-white'}`}>{data.ph}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#637588] dark:text-[#9cafba] text-xs font-medium">{t.dashboard.oxygen}</span>
                    <span className="text-[#111618] dark:text-white text-base font-bold">{data.do}</span>
                </div>
            </div>

            <Link to={detailLink} className="w-full mt-auto py-2 rounded-lg bg-gray-100 dark:bg-[#283339] text-[#111618] dark:text-white text-sm font-semibold hover:bg-gray-200 dark:hover:bg-[#32414b] transition-colors text-center block">
                {buttonText}
            </Link>
        </div>
    );
}
