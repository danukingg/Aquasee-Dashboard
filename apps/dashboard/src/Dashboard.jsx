import Layout from './components/Layout';
import Header from './components/Header';
import PondCard from './components/PondCard';
import { useLanguage } from './context/LanguageContext';

export default function Dashboard() {
    const { t } = useLanguage();

    const pond1Sparkline = (
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 60">
            <defs>
                <linearGradient id="gradient1" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0d9be7', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#0d9be7', stopOpacity: 0 }} />
                </linearGradient>
            </defs>
            <path d="M0,40 Q30,35 60,45 T120,30 T180,35 T240,20 T300,30" fill="none" stroke="#0d9be7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d="M0,40 Q30,35 60,45 T120,30 T180,35 T240,20 T300,30 V60 H0 Z" fill="url(#gradient1)" stroke="none" />
        </svg>
    );

    const pond2Sparkline = (
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 60">
            <defs>
                <linearGradient id="gradient2" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
                </linearGradient>
            </defs>
            <path d="M0,30 Q40,30 80,20 T160,25 T240,45 T300,50" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d="M0,30 Q40,30 80,20 T160,25 T240,45 T300,50 V60 H0 Z" fill="url(#gradient2)" stroke="none" />
        </svg>
    );

    const pond3Sparkline = (
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 60">
            <path d="M0,35 Q50,40 100,30 T200,35 T300,25" fill="none" stroke="#0d9be7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d="M0,35 Q50,40 100,30 T200,35 T300,25 V60 H0 Z" fill="url(#gradient1)" stroke="none" />
        </svg>
    );

    return (
        <Layout>
            <Header />
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-[#111618] dark:text-white text-lg font-bold">{t.dashboard.assetStatus}</h3>
                    <a href="#" className="text-primary text-sm font-semibold hover:underline">{t.dashboard.viewAll}</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <PondCard
                        title={t.sidebar.assetA}
                        location="Main Garden"
                        volume={`2,500 ${t.dashboard.gallons}`}
                        status="healthy"
                        data={{ temp: '22°C', ph: '7.2', do: '8.4' }}
                        sparkline={pond1Sparkline}
                    />
                    <PondCard
                        title={t.sidebar.assetB}
                        location="Garage"
                        volume={`500 ${t.dashboard.gallons}`}
                        status="warning"
                        data={{ temp: '25°C', ph: '6.8', do: '7.9', tempWarning: true, phWarning: true }}
                        sparkline={pond2Sparkline}
                    />
                    <PondCard
                        title={t.sidebar.assetC}
                        location="Patio"
                        volume={`150 ${t.dashboard.gallons}`}
                        status="healthy"
                        data={{ temp: '18°C', ph: '7.5', do: '8.1' }}
                        sparkline={pond3Sparkline}
                    />
                </div>
            </div>
        </Layout>
    );
}
