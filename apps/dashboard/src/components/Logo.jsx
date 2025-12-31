import logoImage from '../assets/logo.png';

export default function Logo({ className }) {
    // Use a div with background image for better control over cover/center 
    // or just an img tag. The user successfully used bg-image in the original HTML.
    // But img tag with object-cover is often easier for a straight "crop".
    return (
        <img
            src={logoImage}
            alt="Aquasee Logo"
            className={`object-cover rounded-full ${className}`}
        />
    );
}
