import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Decoration: Subtle Gradient/Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Main Container */}
            <main className="relative z-10 w-full max-w-md p-4">
                {/* Logo & Header Section */}
                <div className="flex flex-col items-center mb-6 gap-3 text-center">
                    <Logo className="w-12 h-12 shadow-lg shadow-primary/20 rounded-full" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">Aquasee</h1>
                        <p className="text-gray-500 dark:text-text-secondary text-xs font-medium">Monitor your ecosystem</p>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl shadow-xl p-6 backdrop-blur-sm">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Welcome back</h2>
                        <p className="text-gray-500 dark:text-text-secondary text-xs mt-1">Please enter your details to sign in.</p>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
                        {/* Email Field */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-700 dark:text-white text-xs font-medium leading-none" htmlFor="email">Email</label>
                            <div className="relative">
                                <input
                                    className="w-full h-10 rounded-lg border border-gray-300 dark:border-border-dark bg-gray-50 dark:bg-[#151a1e] px-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                                    id="email"
                                    placeholder="user@aquasee.com"
                                    type="email"
                                    defaultValue=""
                                />
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-text-secondary text-[18px] pointer-events-none">mail</span>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-700 dark:text-white text-xs font-medium leading-none" htmlFor="password">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    className="w-full h-10 rounded-lg border border-gray-300 dark:border-border-dark bg-gray-50 dark:bg-[#151a1e] pl-4 pr-10 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                                    id="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    defaultValue=""
                                />
                                <button className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center text-gray-400 dark:text-text-secondary hover:text-primary transition-colors focus:outline-none" type="button">
                                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                                </button>
                            </div>
                        </div>

                        {/* Actions: Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        className="peer h-3.5 w-3.5 cursor-pointer rounded border-gray-300 dark:border-border-dark bg-transparent text-primary focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-surface-dark transition-all checked:bg-primary checked:border-primary"
                                        type="checkbox"
                                    />
                                </div>
                                <span className="text-xs font-normal text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Remember me</span>
                            </label>
                            <a className="text-xs font-medium text-primary hover:text-[#096ba1] transition-colors focus:outline-none focus:underline decoration-2 underline-offset-2" href="#">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button className="mt-1 w-full h-10 bg-primary hover:bg-[#0b8ad0] active:bg-[#0979b6] text-white rounded-lg text-sm font-bold tracking-wide shadow-md shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group" type="submit">
                            <span>Log In</span>
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </form>

                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-border-dark/50 text-center">
                        <p className="text-xs text-gray-500 dark:text-text-secondary">
                            Don't have an account?
                            <a className="font-medium text-primary hover:text-[#0b8ad0] transition-colors ml-1" href="#">Contact Support</a>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-[10px] text-gray-400 dark:text-gray-600">© 2024 Aquasee Systems. All rights reserved.</p>
                </div>
            </main>
        </div>
    );
}
