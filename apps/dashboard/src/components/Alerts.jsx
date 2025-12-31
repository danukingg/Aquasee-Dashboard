export function SystemHealth() {
    return (
        <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-[#1a262d] to-[#101c22] border border-[#283339] flex flex-col gap-3">
            <h4 className="text-white text-sm font-bold">Overall System Health</h4>
            <div className="w-full bg-[#283339] rounded-full h-2.5">
                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
            </div>
            <div className="flex justify-between text-xs">
                <span className="text-[#9cafba]">92% Optimal</span>
                <span className="text-white font-bold">Good</span>
            </div>
        </div>
    );
}

export function AlertItem({ type, title, message, time }) {
    let borderColor = 'border-l-primary';
    let iconBg = 'bg-primary/10';
    let iconColor = 'text-primary';
    let icon = 'system_update';
    let bg = 'hover:bg-gray-50 dark:hover:bg-[#283339]/50';

    if (type === 'critical') {
        borderColor = 'border-l-amber-500';
        iconBg = 'bg-amber-500/10';
        iconColor = 'text-amber-500';
        icon = 'build';
        bg = 'bg-amber-50/50 dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#283339]/50';
    } else if (type === 'warning') {
        borderColor = 'border-l-amber-500';
        iconBg = 'bg-amber-500/10';
        iconColor = 'text-amber-500';
        icon = 'thermostat';
        bg = 'bg-amber-50/50 dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#283339]/50';
    } else if (type === 'success') {
        borderColor = 'border-l-emerald-500';
        iconBg = 'bg-emerald-500/10';
        iconColor = 'text-emerald-500';
        icon = 'check_circle';
    }

    return (
        <div className={`flex gap-4 p-4 border-b border-gray-100 dark:border-[#283339] border-l-4 ${borderColor} ${bg} transition-colors cursor-pointer`}>
            <div className="flex-shrink-0 mt-0.5">
                <div className={`size-8 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
                    <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#111618] dark:text-white text-sm font-semibold leading-tight">{title}</p>
                <p className="text-[#637588] dark:text-[#9cafba] text-xs leading-normal">{message}</p>
                <p className="text-[#9cafba] text-[10px] font-medium mt-1">{time}</p>
            </div>
        </div>
    );
}

export function Alerts() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pt-1">
                <h3 className="text-[#111618] dark:text-white text-lg font-bold">System Alerts</h3>
                <button className="size-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-[#283339] text-[#9cafba] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
            </div>
            <div className="flex flex-col bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#283339] rounded-xl overflow-hidden shadow-sm">
                <AlertItem
                    type="critical"
                    title="Filter maintenance required"
                    message="Koi Pond 1 filter flow rate has dropped by 15% in the last 2 hours."
                    time="2 hours ago"
                />
                <AlertItem
                    type="warning"
                    title="Temperature Spike"
                    message="Breeding Tank temperature is rising faster than expected."
                    time="4 hours ago"
                />
                <AlertItem
                    type="info"
                    title="System Updated"
                    message="Firmware v2.4.1 installed successfully on all connected controllers."
                    time="Yesterday"
                />
                <AlertItem
                    type="success"
                    title="Data Sync Complete"
                    message="Cloud backup completed for all pond history logs."
                    time="Yesterday"
                />
                <div className="p-3 text-center bg-gray-50 dark:bg-[#152026]">
                    <a href="#" className="text-xs font-bold text-primary hover:text-[#0b8bcc] uppercase tracking-wide">View History</a>
                </div>
            </div>
            <SystemHealth />
        </div>
    );
}
